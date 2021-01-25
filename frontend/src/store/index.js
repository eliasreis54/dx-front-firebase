import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configStore = () => {
  return createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(thunk)
    ),
  )
}

export default configStore;
