import pool from "../pool";

export const getAvailableDays = <T>() => {
  const sql = `
SELECT lower(available) AS start_time, upper(available) as end_time, available 
FROM
(
    SELECT sub.*, 
        CASE 
            WHEN upper(time_range) < lower(lead(time_range) OVER (ORDER BY time_range))
            THEN tsrange(
                    upper(time_range),
                    lower(lead(time_range) OVER (ORDER BY time_range))
                )
            ELSE NULL
        END AS available
    FROM (
        SELECT b.time_range
        FROM bookings b
        WHERE lower(time_range)::date BETWEEN CURRENT_DATE AND CURRENT_DATE + INTERVAL '60 days'

        UNION

        -- Working hours for each day
        SELECT tsrange(
                dates.closed + interval '19 hours',
                dates.closed + interval '33 hours'
            ) AS time_range
        FROM generate_series((CURRENT_DATE - 1)::timestamp, CURRENT_DATE + INTERVAL '60 days', INTERVAL '1 day')
            dates(closed)

			UNION

        -- Break time (12:00–15:00)
        SELECT tsrange(
                dates.closed + interval '12 hours',
                dates.closed + interval '15 hours'
            )
        FROM generate_series(
                (CURRENT_DATE)::timestamp,
                CURRENT_DATE + INTERVAL '60 days',
                INTERVAL '1 day'
             ) dates(closed)

                ) sub) 
WHERE upper(available) - lower(available) >= interval '60 minutes'
AND EXTRACT(DOW FROM lower(available)) NOT IN (0, 6)
AND (
  lower(available)::date > CURRENT_DATE
  OR (upper(available)::time)  - INTERVAL '61 minutes' >= CURRENT_TIME
);`;

  return pool.query<T>(sql);
};

export const getAvailableSlots = <T>(date: string) => {
  const sql = `
SELECT lower(available) AS start_time, upper(available) as end_time
FROM
(
    SELECT sub.*, 
        CASE 
            WHEN upper(time_range) < lower(lead(time_range) OVER (ORDER BY time_range))
            THEN tsrange(
                    upper(time_range),
                    lower(lead(time_range) OVER (ORDER BY time_range))
                )
            ELSE NULL
        END AS available
    FROM (
        SELECT b.time_range
        FROM bookings b
        WHERE lower(time_range)::date BETWEEN $1::timestamp AND $1::timestamp + INTERVAL '1 day'

        UNION

        -- Working hours for each day
        SELECT tsrange(
                dates.closed + interval '19 hours',
                dates.closed + interval '33 hours'
            ) AS time_range
        FROM generate_series(($1::timestamp - INTERVAL '1 day')::timestamp, $1::timestamp, INTERVAL '1 day')
            dates(closed)

			UNION

        -- Break time (12:00–15:00)
        SELECT tsrange(
                dates.closed + interval '12 hours',
                dates.closed + interval '15 hours'
            )
        FROM generate_series(
                ($1)::timestamp,
                $1::timestamp,
                INTERVAL '1 day'
             ) dates(closed)

                ) sub) 
WHERE upper(available) - lower(available) >= interval '60 minutes'
AND EXTRACT(DOW FROM lower(available)) NOT IN (0, 6)
AND (
  lower(available)::date > CURRENT_DATE
  OR (upper(available)::time)  - INTERVAL '61 minutes' >= CURRENT_TIME
);`;

  return pool.query<T>(sql, [date]);
};
