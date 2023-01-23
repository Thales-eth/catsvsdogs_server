const router = require('express').Router()
const DogFact = require('../models/DogFact.model')
const { getDogFacts, getRandomDogFact } = require('../controllers/dogfact.controller')

router.get("/dogfacts", getDogFacts)
router.get("/dogfacts/random", getRandomDogFact)

module.exports = router
