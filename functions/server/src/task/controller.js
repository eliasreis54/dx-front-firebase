const service = require('./service')

const findAllTasks = async (req, res) => {
  const tasks = await service.findAllTasks()
  return res.send({ tasks })
}

const createTask = async (req, res) => {
  const { body } = req
  const task = await service.createTask(body)
  return res.send({ task })
}

const deleteTask = async (req, res) => {
  const { params: { id } } = req
  await service.deleteTaks(id)
  return res.sendStatus(204)
}

const updateTask = async (req, res) => {
  const { body } = req
  const { params: { id } } = req
  const newDoc = await service.updateTask(id, body)
  return res.send({ task: newDoc })
}

module.exports = {
  findAllTasks,
  createTask,
  deleteTask,
  updateTask,
}
