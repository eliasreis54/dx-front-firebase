const functions = require('firebase-functions');
const admin = require('firebase-admin');
const onCreateTask = require('./notifyTaskDone')

admin.initializeApp({
  credential: admin.credential.applicationDefault()
});

const api = require('./server/server')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.api  = functions.https.onRequest(api)

exports.notifyTaskDone = functions.firestore.document('tasks/{docId}').onUpdate(onCreateTask)

exports.setDateOnPost = functions.firestore.document('tasks/{docId}').onCreate((snap, context) => {
  const now = new Date()
  functions.logger.info(`Updating current date in ${snap.id}`, { structuredData: true });
  admin.firestore().collection('tasks').doc(snap.id).update({
    date: now
  })
})
