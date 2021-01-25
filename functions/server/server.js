const express = require('express')
const taskRouter = require('./src/task/router')
const { authMiddleware } = require('./src/middleware')

const app = express()


app.use(express.json())

app.use('/tasks', authMiddleware, taskRouter)

module.exports = app
