SELECT date_created, title, content FROM tailend_posts p 
JOIN tailend_users u ON u.id = p.author_id
WHERE p.id = $1;