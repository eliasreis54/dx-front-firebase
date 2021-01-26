import { ADD_TASK, GET_ALL_TASKS, UPDATE_TASK } from './actionsType'

const initialState = {
  tasks: []
}

const filterTasks = (currentTasks, task) => {
  const filteredTasks = currentTasks.filter(t => t.id !== task.id)
  return [...filteredTasks, task]
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case GET_ALL_TASKS:
      return {
        ...state,
        tasks: action.payload,
      }
    case UPDATE_TASK:
      return {
        ...state,
        tasks: filterTasks(state.tasks, action.payload)
      }
    default:
      return state
  }
}

export default taskReducer
