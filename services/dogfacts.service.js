const axios = require('axios')

class DogService {
    constructor() {
        this.api = axios.create({
            baseURL: process.env.DOG_FACTS_BASE_URL || "http://dog-api.kinduff.com/api"
        })
    }

    getDogFacts() {
        return this.api.get('/facts?number=100').then(({ data }) => data)
    }
}

module.exports = new DogService()