INSERT INTO tailend_users (username, password, email)
VALUES ($1, $2, $3)
RETURNING *;