const CatService = require('../services/catfacts.service')
const CatFact = require('../models/CatFact.model')
const { default: mongoose } = require('mongoose')

require('../db/index')

const CatFacts = []

CatService
    .getCatFacts()
    .then(facts => {
        facts.forEach(({ text }) => {
            const words = text.split(" ")
            for (e of words) {
                if (!isNaN(Number(e))) {
                    CatFacts.push({ description: text })
                }
            }
        })

    })
    .then(() => {
        return CatFact.insertMany(CatFacts)
    })
    .catch(e => console.log(e))
    .finally(() => mongoose.connection.close)

