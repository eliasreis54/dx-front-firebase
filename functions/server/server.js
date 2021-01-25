const express = require('express')

const app = express()

const taskRouter = require('./src/task/router')

app.use(express.json())

app.use('/tasks', taskRouter)

module.exports = app
