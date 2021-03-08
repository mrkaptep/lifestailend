INSERT INTO tailend_photos (author_id, date_created, photo_link)
VALUES ($1, $2, $3)
RETURNING *;
