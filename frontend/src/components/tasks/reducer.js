import { ADD_TASK } from './actionsType'

const initialState = {
  tasks: ['a', 'b','a'],
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    default:
      return state
  }
}

export default taskReducer
