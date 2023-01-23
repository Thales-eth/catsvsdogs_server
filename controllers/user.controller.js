const User = require('../models/User.model')

const getUsers = (req, res, next) => {
    User
        .find()
        .sort({ points: -1 })
        .select("-createdAt -updatedAt -__v")
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => res.status(500).json({ error: err.message }))
}

const getOneUser = (req, res, next) => {
    const { user_id } = req.params

    User
        .findById(user_id)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => res.status(500).json({ error: err.message }))
}

const getLoggedUser = (req, res, next) => {
    const { id } = req.user

    User
        .findById(id)
        .select("email league points username _id")
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => res.status(500).json({ error: err.message }))
}

const editUser = (req, res, next) => {
    const { user_id } = req.params
    const { username, email, password, points } = req.body

    User
        .findByIdAndUpdate(user_id, { username, email, password, points }, { new: true })
        .select("username email password points")
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => res.status(500).json({ error: err.message }))
}

const deleteUser = (req, res, next) => {
    const { user_id: id } = req.params

    User
        .findByIdAndDelete(id)
        .then(user => {
            console.log("HERE'S THE USER ===>", user)
            res.status(200).json(user)
        })
        .catch(err => res.status(500).json({ error: err.message }))
}

module.exports = { getUsers, getOneUser, getLoggedUser, editUser, deleteUser }