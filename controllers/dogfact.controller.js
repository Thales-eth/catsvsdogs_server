const DogFact = require('../models/DogFact.model')

const getDogFacts = (req, res, next) => {
    DogFact
        .find()
        .select("description")
        .then(dogfacts => res.json(dogfacts))
        .catch(err => res.status(500).json(err))
}

const getRandomDogFact = (req, res, next) => {
    DogFact
        .find()
        .select("description")
        .then(dogfacts => {
            const randomIndex = Math.floor(Math.random() * dogfacts.length)
            res.json(dogfacts[randomIndex])
        })
        .catch(err => res.status(500).json(err))
}

module.exports = { getDogFacts, getRandomDogFact }