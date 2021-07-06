const express = require('express')
const path = require('path')

//db function routes
const todos = require('./routes/todos')

const server = express()

server.use(express.json())
server.use(express.static(path.join('server', 'public')))

//api
server.use('/api/v1', todos)

module.exports = server
