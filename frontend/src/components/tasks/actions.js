import { ADD_TASK } from './actionsType'

const addTask = task => ({
  type: ADD_TASK,
  payload: task
})

export {
  addTask,
}
