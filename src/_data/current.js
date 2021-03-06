const axios = require('axios');

module.exports = async () => {
    if (process.env.ELEVENTY_ENV === 'production') {
        return axios('https://api.covidtracking.com/v1/us/current.json').then(res => res.data)
    } else {
        return Promise.resolve([
            {
                "date": 20201225,
                "states": 56,
                "positive": 12706167,
                "negative": 148975844,
                "pending": 14856,
                "hospitalizedCurrently": 90481,
                "hospitalizedCumulative": 557996,
                "inIcuCurrently": 17802,
                "inIcuCumulative": 29673,
                "onVentilatorCurrently": 5979,
                "onVentilatorCumulative": 3153,
                "recovered": 4871203,
                "dateChecked": "2020-11-26T24:00:00Z",
                "death": 254530,
                "hospitalized": 557996,
                "totalTestResults": 186027239,
                "lastModified": "2020-11-26T24:00:00Z",
                "total": 0,
                "posNeg": 0,
                "deathIncrease": 1319,
                "hospitalizedIncrease": 2236,
                "negativeIncrease": 846220,
                "positiveIncrease": 125082,
                "totalTestResultsIncrease": 1150227,
                "hash": "95fe585e2d04001f9284ed3bef398e5e0a8727ef"
            }
        ])
    }
}