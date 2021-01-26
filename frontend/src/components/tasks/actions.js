import { ADD_TASK, GET_ALL_TASKS, UPDATE_TASK} from './actionsType'

const addTask = task => ({
  type: ADD_TASK,
  payload: task
})

const getAllTasks = tasks => ({
  type: GET_ALL_TASKS,
  payload: tasks
})

const updateTask = task => ({
  type: UPDATE_TASK,
  payload: task
})

export {
  addTask,
  getAllTasks,
  updateTask,
}
