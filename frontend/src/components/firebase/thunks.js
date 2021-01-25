import firebase from '../firebase'

import { doLogin, doLogout } from './requests'
import { findUser, logout } from './actions'


const doLoginUser = () => dispatch => doLogin()
  .then(user => {
    dispatch(findUser(user))
  })

const doLogoutUser = () => dispatch => doLogout()
  .then(() => {
    return dispatch(logout())
  })

const checkLoginUser = () => dispatch => firebase.auth().onAuthStateChanged(user => {
  if (user !== null) {
  }
  return dispatch(findUser(user))
})

export {
  doLoginUser,
  checkLoginUser,
  doLogoutUser,
}
