import { combineReducers } from 'redux'

import taskReducer from '../components/tasks/reducer'
import loginReducer from '../components/firebase/reducer'

export default combineReducers({
  taskReducer,
  loginReducer,
})
