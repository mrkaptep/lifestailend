INSERT INTO tailend_posts(author_id, date_created, title, content)
VALUES ($1, $2, $3, $4)
RETURNING *;