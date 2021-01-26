import { getAllTasksFromApi, createTaskFromApi, updateTaskFromApi } from './requests'
import { getAllTasks, addTask, updateTask } from './actions'

const getAllThunk = () => dispatch => getAllTasksFromApi()
  .then(payload => dispatch(getAllTasks(payload)))

const createTaskThunk = task => dispatch => createTaskFromApi(task)
  .then(task => dispatch(addTask(task)))

const updateTaskThunk = (id, task) => dispatch => updateTaskFromApi(id, task)
  .then(payload => dispatch(updateTask(payload)))

export {
  getAllThunk,
  createTaskThunk,
  updateTaskThunk
}
