const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.get('/', controller.findAllTasks)
router.put('/:id', controller.updateTask)
router.post('/', controller.createTask)
router.delete('/:id', controller.deleteTask)

module.exports = router
