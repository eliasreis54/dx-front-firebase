import config from '../config'
import firebase from 'firebase'

firebase.initializeApp(config.firebaseConfig);
firebase.auth().languageCode = 'pt';

export default firebase;
