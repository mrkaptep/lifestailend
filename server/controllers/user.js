const bcrypt = require('bcryptjs');

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