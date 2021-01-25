const admin = require('firebase-admin')
const uuid = require('uuid').v4
const db = admin.firestore()

const taskRef = db.collection('tasks')

const findAllTasks = async () => {
  const docs = await taskRef.get()
  const tasks = []
  docs.forEach(doc => tasks.push(doc.data()))
  return tasks
}

const createTask = async doc => {
  const id = uuid()
  doc.id = id
  await taskRef.doc(id).set(doc)
  return doc
}

const deleteTaks = async id => {
  await taskRef.doc(id).delete()
}

const updateTask = async (id, body) => {
  await taskRef.doc(id).update({
    description: body.description,
    done: body.done,
    author: body.author,
  })
  const newDoc = await taskRef.doc(id).get()
  return newDoc.data()
}

module.exports = {
  findAllTasks,
  createTask,
  deleteTaks,
  updateTask
}
