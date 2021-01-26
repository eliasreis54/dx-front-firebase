import firebase from './index'

const doLogin = () => firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(() => {
    const provider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(provider)
  })

const doLogout = () => firebase.auth().signOut()

export {
  doLogin,
  doLogout,
}
