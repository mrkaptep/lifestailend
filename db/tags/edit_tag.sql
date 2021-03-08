UPDATE tailend_tags 
SET tag = $2
WHERE tag_id = $1;