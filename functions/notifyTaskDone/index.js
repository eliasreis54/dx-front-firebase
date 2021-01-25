const functions = require('firebase-functions');
const fetch = require('node-fetch')

const chatHost = 'https://chat.googleapis.com/v1/spaces/AAAAaHQqhKw/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=BAo16UaKvSHy2bkER5YUyPLkY8dJys7a5kzbc_ChzCM%3D'

const generateMessage = ({ id, author }) => `A task de id: ${id} foi concluída por ${author}`

const sendMessageOnChat = message => {
  fetch(chatHost, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset-UTF-8",
    },
    body: JSON.stringify({
      "text": message
    })
  }).then(res => res.json())
    .then(data => {
      functions.logger.info(`Mensagem enviada por ${data.sender.displayName} no google chat ${new Date()}`, { structuredData: true });
      return
    })
    .catch(console.error)
}

const onCreateTask = (queryDocumentSnapshot, eventContext) => {
  const task = queryDocumentSnapshot.after.data()

  const { done } = task

  if (done) {
    const message = generateMessage(task) 
    sendMessageOnChat(message)
  }
  return 0
}

module.exports = onCreateTask
