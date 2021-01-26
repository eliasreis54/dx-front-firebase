import firebase from '../firebase'

const getToken = () => firebase.auth().currentUser.getIdToken()

const requestPostMethod = async (url, body) => {
  const token = await getToken()
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(res => res.json())
}

const requestGetMethod = async url => {
  const token = await getToken()
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(res => res.json())
}

const requestPutMethod = async (url, newContent) => {
  const token = await getToken()
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify(newContent),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(res => res.json())
}

export {
  requestPostMethod,
  requestGetMethod,
  requestPutMethod,
}
