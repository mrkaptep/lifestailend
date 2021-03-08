INSERT INTO tailend_tags(tag)
VALUES ($1)
RETURNING *;