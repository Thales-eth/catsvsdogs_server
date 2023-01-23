const mongoose = require('mongoose')

const { Schema, model } = mongoose

const DogSchema = new Schema(
    {
        description: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const DogFact = model('DogFact', DogSchema)

module.exports = DogFact