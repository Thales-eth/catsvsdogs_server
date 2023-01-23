const CatFact = require('../models/CatFact.model')

const getAllCats = (req, res, next) => {
    CatFact
        .find()
        .select("description")
        .then(cats => res.json(cats))
        .catch(e => res.status(500).json(err))
}

const getRandomFact = (req, res, next) => {
    CatFact
        .find()
        .select("description")
        .then(cats => {
            const randomNum = Math.floor(Math.random() * cats.length)
            res.json(cats[randomNum])
        })
        .catch(e => res.status(500).json(err))
}

module.exports = { getAllCats, getRandomFact }