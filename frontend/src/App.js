import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { connect } from 'react-redux'

import { doLogoutUser } from './components/firebase/thunks'
import TasksHome from './components/tasks'
import PrivateRouter from './components/privateRouter'
import LoginPage from './components/login/'
import './App.css';

const App = ({ logout }) => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact = { true }>
          <div>
            <LoginPage />
          </div>
        </Route>
        <PrivateRouter>
          <Route path="/" exact = { true }>
            <button onClick={logout}> sair </button>
            <TasksHome />
          </Route>
        </PrivateRouter>
      </Switch>
    </Router>
  );
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(doLogoutUser())
})

const mapStateToProps = ({ loginReducer }) => ({
  isAuthenticated: loginReducer.isAuthenticated,
  currentUser: loginReducer.user
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
