
import {express} from 'express'

const path = require('path')
const axios = require('axios')
const app = express()
const port = 8080
const {join} = require('path')

app.get('/', (req, res) => {
    res.sendFile("index.html", { root: join(__dirname) })
})

app.get('/api', async (req, res) => {
    console.log(req._parsedUrl.query)
    let url = "https://newsapi.org/v2/everything?" + req._parsedUrl.query
    let r = await axios(url)
    let a = r.data
    res.send(a)
})
console.log("start1")
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
