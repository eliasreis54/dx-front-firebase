const express = require('express')
const cors = require('cors')

const taskRouter = require('./src/task/router')
const { authMiddleware } = require('./src/middleware')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/tasks', authMiddleware, taskRouter)

module.exports = app
