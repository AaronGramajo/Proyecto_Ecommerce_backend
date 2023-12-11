const express = require('express')
const {Server: HttpServer} = require('http')

const loggerCustom = require('./utils/log4js')
const { initServer } = require('./app.js')
require('dotenv').config()

//////////////// Io server socket ////////////////
const app = express()
const httpServer = new HttpServer(app)
initServer(app)

const PORT = process.argv[2] || process.env.PORT || 8080
const server = httpServer.listen(PORT, () => {
    loggerCustom.info(`listening on port ${server.address().port}`)
}).on('error', (err)=> loggerCustom.error(`error en el servidor ${err}`))