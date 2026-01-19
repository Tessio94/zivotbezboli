--bookings table
CREATE TABLE bookings (
	id serial PRIMARY KEY,
	firstname text not null,
	lastname text not null,
	email text not null,
	phone text not null,
	note text,
	time_range tsrange NOT NULL,
	created_at timestamptz NOT NULL DEFAULT now(),

	-- Prevent overlapping bookings
	CONSTRAINT bookings_no_overlap EXCLUDE USING GIST (time_range WITH &&)
);



--time intervals
WITH time_blocks AS (
    -- Existing bookings
    SELECT time_range
    FROM bookings
    WHERE lower(time_range)::date
          BETWEEN CURRENT_DATE
          AND CURRENT_DATE + INTERVAL '14 days'

    UNION ALL

    -- Working hours per day
    SELECT tsrange(
        day + INTERVAL '20 hours',
        day + INTERVAL '32 hours'
    )
    FROM generate_series(
        CURRENT_DATE - INTERVAL '1 day',
        CURRENT_DATE + INTERVAL '14 days',
        INTERVAL '1 day'
    ) AS day
),

gaps AS (
    SELECT
        CASE
            WHEN upper(time_range)
                 < lower(lead(time_range) OVER (ORDER BY lower(time_range)))
            THEN tsrange(
                upper(time_range),
                lower(lead(time_range) OVER (ORDER BY lower(time_range)))
            )
        END AS available
    FROM time_blocks
)

SELECT available
FROM gaps
WHERE available IS NOT NULL
  AND upper(available) - lower(available) >= INTERVAL '30 minutes'
  AND EXTRACT(DOW FROM lower(available)) NOT IN (0, 6)
ORDER BY lower(available);


---------------------bookings-free slots--------------------------

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
              AND EXTRACT(DOW FROM lower(available)) NOT IN (0, 6);