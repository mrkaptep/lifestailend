require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const morgan = require('morgan');
const AWS = require('aws-sdk');
const nodemailer = require('nodemailer');
const path = require('path')

//CONTROLLERS
const authCtrl = require('./controllers/user');
const postCtrl = require('./controllers/posts');
const goalsCtrl = require('./controllers/goals');
const tagsCtrl = require('./controllers/tags');
const aws3Ctrl = require('./controllers/aws3')
const photoCtrl = require('./controllers/photos')



//MIDDLEWARE
const app = express();

app.use(morgan('combined'));
app.use(express.json());

let {
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET,
} = process.env;

app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {maxAge: 1000 * 60 * 60 * 24}
    })
);


//DATABASE CONNECTION
// function setupDB(){
    massive({
        connectionString: CONNECTION_STRING,
        ssl: {rejectUnauthorized: false}
    }).then(db => {
        app.set('db', db);
        console.log('db connected');
        app.listen(SERVER_PORT, () => {
            console.log(`Listening on port: ${SERVER_PORT}`);
        });
    }).catch((err) => {
        console.log(err)
        // setTimeout(setupDB, 1000)
    })


//Auth Endpoints
app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.login);
app.post('/auth/logout', authCtrl.logout);
app.get('/auth/user', authCtrl.getUser);

//Post Endpoints
app.post('/api/post', postCtrl.createPost);
app.get('/api/posts', postCtrl.getPosts);
app.get('/api/post/:id', postCtrl.readPost);
app.delete('/api/post/:id', postCtrl.deletePost);

//Goals Endpoints
app.post('/api/goal', goalsCtrl.createGoal);
app.get('/api/goal/:id', goalsCtrl.getGoal);
app.get('/api/goals', goalsCtrl.getGoals);
app.delete('/api/goal/:id', goalsCtrl.deleteGoal);
app.put('/api/goal/:goal_id', goalsCtrl.editGoal);

//Tags Endpoints
app.post('/api/tag', tagsCtrl.createTag);
app.get('/api/tags', tagsCtrl.getTags);
app.delete('/api/tag/:id', tagsCtrl.deleteTag);

//AWS3 Endpoint
app.get('/api/aws3', aws3Ctrl.aws3);

//Photos Endpoints
app.post('/api/photo', photoCtrl.createPhotoPost);
app.get('/api/photos', photoCtrl.getPhotos);
app.delete('/api/photo/:id', photoCtrl.deletePhoto);


app.use( express.static( `${__dirname}/../build`));

app.get('*', (req,res)=> { 
res.sendFile(path.join(__dirname, '../build/index.html')) 
})