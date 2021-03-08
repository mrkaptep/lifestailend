# lifestailend

lifestailend.com

<hr/>

MVP

- users can create an account
- users can login
- user can create a post
- user can delete a post
- user can update a post
- user can read all posts
- have a tailend chart

ICEBOX

- user can set goals
- user can see what goals they have completed
- user can see a chart that will project how much time they will spend on it based off the last 3 months worth of data
- user can click on history and they can filter by the tags to see what they have posted off that tag
- users can up/down vote comments
- connect photos to google photos

## DB

CREATE TABLE tailend_users (
id SERIAL PRIMARY KEY,
username VARCHAR(100) NOT NULL,
password VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL
);

CREATE TABLE tailend_posts (
post_id SERIAL PRIMARY KEY,
title VARCHAR(45) NOT NULL,
tag VARCHAR(100) REFERENCES tailend_tag(id),
content TEXT,
img TEXT,
author_id INTEGER REFERENCES tailend_users(id),
date_created TIMESTAMP
)

CREATE TABLE tailend_tags (
id SERIAL PRIMARY KEY,
tag VARCHAR(100)
)

CREATE TABLE tailend_goals (
goal_id SERIAL PRIMARY KEY,
author_id INTEGER REFERENCES tailend_users(id),
date_created TIMESTAMP,
title VARCHAR(100) NOT NULL,
content TEXT,
time_table INTEGER
)

## SERVER

- Dependencies:

  - massive (for connecting to our postgreSQL db)
  - express (for writing RESTful funcitonality)
  - express-session (for initializing a session for each user)
  - bcrypt (for hashing passwords for authentication)
  - dotenv (to access environmental variables that are in our .gitignore)

- File Structure:

  - server/
    - index.js
    - controllers/
      - post.js
      - user.js
      - goals.js

- Endpoints:
  - register => `/auth/register`
  - login => `/auth/login`
  - logout => `/auth/logout`
  - getUserSession => `/auth/get_user`
  - getPosts => `/api/posts`
  - deletePost => `/api/posts/:id`
  - editPost => `/api/posts/:id`
  - addPost => `/api/posts`

## FRONTEND

- Dependencies:

  - axios
  - react context
  - fontAwesome
  - react-router-dom

- File Structure:
  - src/
    - App.js
    - reset.css
    - routes.js
    - Context/
      - AuthContext.js
      - PostContext.js
      - GoalContext.js
    - components/
      - Header.js
      - Auth.js
      - Form.js
      - Main.js
      - Goals.js
      - History.js

## Technologies

- NodeMailer
- Twilio
- Sass
- ChartJs
