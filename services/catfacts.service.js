const axios = require('axios')

class CatService {
    constructor() {
        this.api = axios.create({
            baseURL: process.env.CAT_FACTS_BASE_URL || "https://cat-fact.herokuapp.com"
        })
    }

    getCatFacts() {
        return this.api.get('/facts').then(({ data }) => data)
    }
}

module.exports = new CatService()