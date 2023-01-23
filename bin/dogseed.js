const Dog = require('../models/DogFact.model')
const DogService = require('../services/dogfacts.service')

const { default: mongoose } = require('mongoose')

require('../db/index')

const DogFacts = []

DogService
    .getDogFacts()
    .then(({ facts }) => {
        facts.forEach(fact => {
            const words = fact.split(" ")
            for (e of words) {
                if (!isNaN(Number(e))) DogFacts.push({ description: fact })
            }
        })
    })
    .then(() => {
        return Dog.insertMany(DogFacts)
    })
    .catch(e => console.log(e))
    .finally(() => {
        console.log('EVERYTHING went well ༼ つ ◕_◕ ༽つ')
        mongoose.connection.close()
    })



