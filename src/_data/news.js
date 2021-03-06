const { default: axios } = require("axios")

const params = new URLSearchParams({
    q: 'coronavirus',
    from: new Date().toJSON().split('T')[0],
    sortBy: 'relevancy',
    apiKey: process.env.NEWS_API_KEY,
    pageSize: 10,
    country: 'us'
});

module.exports = async () => {
    if (process.env.ELEVENTY_ENV === 'production') {
        return axios(`http://newsapi.org/v2/top-headlines?${params.toString()}`).then(res => res.data.articles)
    } else {
        return Promise.resolve([
            {
                "source": {
                    "id": null,
                    "name": "KCCI Des Moines"
                },
                "author": null,
                "title": "IDPH reports 37 additions deaths related to COVID-19 - KCCI Des Moines",
                "description": "As of 10 a.m. Friday, the IDPH website reports 223,544 confirmed cases statewide since Iowa’s outbreak began.",
                "url": "https://www.kcci.com/article/idph-reports-37-additions-deaths-related-to-covid-19/34805696",
                "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/coronavirus-update-1584155219.png?crop=1.00xw:0.977xh;0,0&resize=1200:*",
                "publishedAt": "2020-11-27T16:04:00Z",
                "content": "DES MOINES, Iowa —The Iowa Department of Public Health releases the latest coronavirus data in real time. KCCI provides a daily snapshot of the past 24 hours of statistics.\r\nAs of 10 a.m. Friday, the… [+1314 chars]"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "US Could Have 8 Times More COVID-19 Cases Than Previously Reported, CDC Says | TODAY - TODAY",
                "description": null,
                "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9Wjdfek1seTVpOWPSAQA?oc=5",
                "urlToImage": null,
                "publishedAt": "2020-11-27T13:30:02Z",
                "content": null
            },
            {
                "source": {
                    "id": "the-wall-street-journal",
                    "name": "The Wall Street Journal"
                },
                "author": "Drew Hinshaw, Natalia Ojewska, Maciek Nabrdalik",
                "title": "‘It’s Like the Second World War.’ Covid-19 Is Tearing Into the Parts of Europe That Lack Doctors - The Wall Street Journal",
                "description": "Europe’s crisis is moving into poorer states that have exported doctors for decades. Now the bill from that exodus is coming due.",
                "url": "https://www.wsj.com/articles/its-like-the-second-world-war-covid-19-is-tearing-into-the-parts-of-europe-that-lack-doctors-11606473001",
                "urlToImage": "https://images.wsj.net/im-264318/social",
                "publishedAt": "2020-11-27T10:30:00Z",
                "content": "MIDZYCHÓD, PolandSo many new doctors left Poland for better-paying jobs in Europes west that when ukasz Rotnicki decided to stay behind he often found himself working 36-hour shifts, sleeping on the … [+801 chars]"
            },
            {
                "source": {
                    "id": "usa-today",
                    "name": "USA Today"
                },
                "author": "Adrianna Rodriguez",
                "title": "Fauci worries Thanksgiving may be the start of a dark holiday season if COVID-19 cases continue to soar - USA TODAY",
                "description": "Anthony Fauci said the country is in a vulnerable position heading into the holidays because infections are too high to be able to control surges.",
                "url": "https://www.usatoday.com/story/news/nation/2020/11/27/fauci-christmas-could-look-lot-like-thanksgiving-amid-covid-surge/3777541001/",
                "urlToImage": "https://www.gannett-cdn.com/presto/2020/10/23/USAT/59385954-68b0-4b9d-8ab5-eaf9b0f28452-AFP_8QK2XY.jpg?crop=5766,3244,x0,y293&width=3200&height=1680&fit=bounds",
                "publishedAt": "2020-11-27T10:02:48Z",
                "content": "If you can't visit family due to the COVID-19 pandemic, host a virtual Thanksgiving dinner instead.\r\nUSA TODAY\r\nDr. Anthony Fauci suggested Thanksgiving may be the beginning of a dark holiday season … [+5196 chars]"
            }
        ])
    }
}