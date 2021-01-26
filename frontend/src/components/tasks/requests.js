import config from '../config'
import { requestPostMethod, requestGetMethod, requestPutMethod } from '../utils'

const getAllTasksFromApi = () =>requestGetMethod(`${config.backend_host}/tasks`)
    .then(({ tasks }) => tasks)

const createTaskFromApi = task => requestPostMethod(`${config.backend_host}/tasks`, task)
    .then(({ task }) => task)

const updateTaskFromApi = (id, newTask) => requestPutMethod(`${config.backend_host}/tasks/${id}`, newTask)
    .then(({ task }) => task)

export {
  getAllTasksFromApi,
  createTaskFromApi,
  updateTaskFromApi
}
