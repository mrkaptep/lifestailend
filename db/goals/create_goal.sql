INSERT INTO tailend_goals (author_id, date_created, title, content, time_table)
VALUES ($1, $2, $3, $4, $5)
RETURNING *;