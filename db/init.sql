DROP TABLE tailend_users

CREATE TABLE tailend_users (
   id SERIAL PRIMARY KEY,
   username VARCHAR(100) NOT NULL,
   password VARCHAR(100) NOT NULL,
   email VARCHAR(100) NOT NULL
);

DROP TABLE tailend_posts

CREATE TABLE tailend_posts (
   post_id SERIAL PRIMARY KEY,
   author_id INTEGER REFERENCES tailend_users(id),
   date_created TIMESTAMP,
   title VARCHAR(45) NOT NULL,
   content TEXT
)


CREATE TABLE tailend_tags (
   tag_id SERIAL PRIMARY KEY,
   tag VARCHAR(100)
)

CREATE TABLE post_tags (
post_tag_id SERIAL PRIMARY KEY,
post_id INT REFERENCES tailend_posts(post_id),
tag_id INT REFERENCES tailend_tags(tag_id)
)

DROP TABLE tailend_goals

CREATE TABLE tailend_goals (
   goal_id SERIAL PRIMARY KEY,
   author_id INTEGER REFERENCES tailend_users(id),
   date_created TIMESTAMP,
   title VARCHAR(100) NOT NULL,
   content TEXT,
   time_table INTEGER
)

CREATE TABLE tailend_photos (
   photo_id SERIAL PRIMARY KEY,
   author_id INTEGER REFERENCES tailend_users(id),
   date_created TIMESTAMP,
   photo_link VARCHAR(200)
)