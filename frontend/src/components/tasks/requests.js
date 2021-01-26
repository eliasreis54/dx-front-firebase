import config from '../config'
import { requestPostMethod, requestGetMethod, requestPutMethod } from '../utils'

const env = process.env.NODE_ENV

const getAllTasksFromApi = () =>requestGetMethod(`${config.backend_host[env]}/tasks`)
    .then(({ tasks }) => tasks)

const createTaskFromApi = task => requestPostMethod(`${config.backend_host[env]}/tasks`, task)
    .then(({ task }) => task)

const updateTaskFromApi = (id, newTask) => requestPutMethod(`${config.backend_host[env]}/tasks/${id}`, newTask)
    .then(({ task }) => task)

export {
  getAllTasksFromApi,
  createTaskFromApi,
  updateTaskFromApi
}
