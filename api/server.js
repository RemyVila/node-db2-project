const express = require("express")
const carRouter = require('./cars/cars-router')
const server = express()

// DO YOUR MAGIC
server.use(express.json())

server.use('/cars', carRouter)

module.exports = server
