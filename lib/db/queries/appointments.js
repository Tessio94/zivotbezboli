import pool from "../pool";

export const getAvailableSlotsQuery = () => {
  const sql = `
SELECT available FROM
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
                dates.closed + interval '20 hours',
                dates.closed + interval '32 hours'
            ) AS time_range
        FROM generate_series((CURRENT_DATE - 1)::timestamp, CURRENT_DATE + INTERVAL '60 days', INTERVAL '1 day')
            dates(closed)
                ) sub) 
WHERE upper(available) - lower(available) >= interval '60 minutes'
AND EXTRACT(DOW FROM lower(available)) NOT IN (0, 6);`;

  return pool.query(sql);
};
