import { LOADING_USER, CURRENT_USER, FINISHED_LOADING_USER, LOGOUT_USER } from './actionTypes'

const getUser = () => ({
  type: LOADING_USER,
})

const findUser = user => ({
  type: CURRENT_USER,
  payload: user,
})

const finishGetUser = () => ({
  type: FINISHED_LOADING_USER,
})

const logout = () => ({
  type: LOGOUT_USER
})

export {
  getUser,
  findUser,
  finishGetUser,
  logout,
}
