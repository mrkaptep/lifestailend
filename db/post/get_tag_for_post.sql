SELECT 
tailend_posts.post_id,
tailend_posts.author_id,
tailend_posts.date_created,
tailend_posts.title,
tailend_posts.content,
post_tags.tag_id,
tailend_tags.tag
FROM tailend_posts
JOIN post_tags on tailend_posts.post_id = post_tags.post_id
JOIN tailend_tags on tailend_tags.tag_id = post_tags.tag_id

-- SELECT * FROM tailend_posts
-- join post_tags on tailend_posts.post_id = post_tags.post_id
-- join tailend_tags on tailend_tags.tag_id = post_tags.tag_id