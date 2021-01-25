const admin = require('firebase-admin')
const functions = require('firebase-functions');

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    return res.status(401).json({ message: 'You must send authorization' })
  }

  const token = authorization.split(' ')
  if (token[0] !== 'Bearer') {
    return res.status(401).json({ message: 'You must send Bearer token' })
  }
  try {
    const decodedToken = await admin.auth().verifyIdToken(token[1])
    req.user = decodedToken
    return next()
  } catch (e) {
    functions.logger.info(`Error on decode token ${e.message}`, {structuredData: true});
    return res.sendStatus(401)
  }
}


module.exports = {
  authMiddleware
}
