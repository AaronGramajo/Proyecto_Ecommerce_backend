const bodyParser = require('body-parser')
// const { configMongo } = require('./data_persistence/container/config_mongo.js')

const routeProducts = require('./routes/productRoutes.js')

const initServer = (app) => {
    const {json, urlencoded} = require('express')
    app.use(json())
    app.use(bodyParser.json())
    app.use(urlencoded({extended:true}))
    
    app.use('/.netlify/functions/server/api/products', routeProducts)
    app.all('*', (req, res) => {
        return res.status(404).send({
            Error: 'path not found'
        })
    })
}

module.exports = {initServer}