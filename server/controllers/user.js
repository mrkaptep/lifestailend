const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
require('dotenv').config();

let {
    GMAIL_USER_NAME,
    GMAIL_USER_PASSWORD
} = process.env;

module.exports = {

    register: async (req, res) => {
        const db = req.app.get('db');
        const {username, password, email} = req.body;
        const [result] = await db.user.find_user(username);
        if(result){
            return res.status(409).send('Username taken');
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const[user] = await db.user.create_user(username, hash, email)
        delete user.password
        req.session.user = user
        let transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: GMAIL_USER_NAME,
                pass: GMAIL_USER_PASSWORD
            }
        })
        let mailOptions ={
            from: GMAIL_USER_NAME,
            to: email,
            subject: "Welcome to Life's Tail End!",
            text: "Welcome and Thank you for joining Life's Tail End. If you have any feedback or need support, pleases send us an email."
        }
        transporter.sendMail(mailOptions, function(err, data){
            if (err) {
                console.log(err)
            } else {
                console.log('email sent')
            }
        })
        return res.status(200).send(req.session.user)
    },

    login: async (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;
        const [user] = await db.user.find_user(username);
        if(!user){
            return res.status(401).send('Incorrect credentials')
        }
        const isAuthenticated = bcrypt.compareSync(password, user.password)
        if(!isAuthenticated){
            return res.status(401).send('Incorrect credentials')
        }
        delete user.password
        req.session.user = user
        return res.status(200).send(req.session.user)
    },

    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },
    
    getUser: (req, res) => {
        if(!req.session.user){
            return res.status(401).send('Please log in')
        }
        return res.status(200).send(req.session.user)
    }
}