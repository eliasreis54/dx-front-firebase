import { LOADING_USER, CURRENT_USER, FINISHED_LOADING_USER, LOGOUT_USER } from './actionTypes'

const initialState = {
  loadingUser: true,
  user: null,
  isAuthenticated: false,
}

const loginReducer = (state  = initialState, action) => {
  switch (action.type) {
    case LOADING_USER: 
      return {
        ...state,
        loadingUser: true,
      }
    case CURRENT_USER:
      if (action.payload === null) {
        return {
          ...state,
          loadingUser: false,
          isAuthenticated: false
        }
      }
      return {
        ...state,
        loadingUser: false,
        user: action.payload,
        isAuthenticated: true,
      }
    case FINISHED_LOADING_USER: 
      return {
        ...state,
        loadingUser: false,
      }
    case LOGOUT_USER: 
      return {
        ...state,
        loadingUser: false,
        isAuthenticated: false,
        user: null,
      }
    default:
      return state
  }
}

export default loginReducer;
