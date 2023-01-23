const router = require('express').Router()
const CatFact = require('../models/CatFact.model')
const { getAllCats, getRandomFact } = require('../controllers/catfact.controller')

router.get('/catfacts', getAllCats)
router.get('/catfacts/random', getRandomFact)

module.exports = router
