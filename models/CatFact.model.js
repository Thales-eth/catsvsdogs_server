const mongoose = require('mongoose')

const { Schema, model } = mongoose

const CatSchema = new Schema(
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

const CatFact = model('CatFact', CatSchema)

module.exports = CatFact