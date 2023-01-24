const bcrypt = require('bcryptjs')
const { signJwt } = require('../utils/jwt.util')
const User = require('../models/User.model')

const signup = (req, res, next) => {

    const { username, email, password } = req.body

    if (!email.trim() || !password) {
        res.status(400).json({ err: "Bruh, just input some stuff pls" })
        return
    }

    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    if (!email.match(regex)) {
        res.status(400).json({ err: "Choose a valid email" })
        return
    }

    bcrypt
        .genSalt(+process.env.SALT)
        .then(salt => {
            const hashedPwd = bcrypt.hashSync(password, salt)
            return User.create({ username, email, password: hashedPwd })
        })
        .then(() => {
            res.status(201).json({ message: 'New User created!' })
        })
        .catch(err => {
            if (err.message.split(" ")[0] === 'E11000') {
                res.status(400).json({ error: "Username already in use!" })
                return
            }
            res.status(400).json({ error: err.message })
        })
}

const login = (req, res, next) => {
    const { email, password: plainPwd } = req.body

    if (!email.trim() || !plainPwd) {
        throw new Error("Bruh, just input some stuff pls")
    }

    User
        .findOne({ email })
        .then(user => {
            if (!user) {
                throw new Error("Plsss, wrong email")
            }

            if (!bcrypt.compareSync(plainPwd, user.password)) {
                throw new Error("Plssss, wrong password")
            }

            const authToken = signJwt(user._id.toString(), email)
            res.json({ authToken })
        })
        .catch(err => {
            res.status(400).json({ error: err.message })
        })

}

module.exports = { signup, login }