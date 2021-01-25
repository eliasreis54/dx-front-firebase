import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux'
import { checkLoginUser } from '../firebase/thunks'

import {
  Route,
  Redirect,
} from "react-router-dom";

import { useEffect } from 'react'

const PrivateRouter = ({ children, isAuthenticated, loadingUser, onAuthStateChange, ...rest }) => {
  useEffect(() => {
    onAuthStateChange()
  }, [onAuthStateChange])

  if (loadingUser) {
    return (
      <CircularProgress />
    )
  }

  return (
     <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    /> 
  )
}

const mapStateToProps = ({ loginReducer }) => ({
  isAuthenticated: loginReducer.isAuthenticated,
  loadingUser: loginReducer.loadingUser,
})

const mapDispatchToProps = dispatch => ({
  onAuthStateChange: () => dispatch(checkLoginUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRouter);
