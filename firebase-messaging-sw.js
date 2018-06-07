import Firebase from 'firebase'

var serviceAccount = require('./serviceAccountKey')

const firebaseApp = Firebase.initializeApp({
  // Populate your firebase configuration data here.
  apiKey: "AIzaSyAS5TmIcCxrS5GLS9kt-GXZ9u1XYebhTDc",
  authDomain: "aqua-cc873.firebaseapp.com",
  databaseURL: "https://aqua-cc873.firebaseio.com",
  projectId: "aqua-cc873",
  storageBucket: "aqua-cc873.appspot.com",
  messagingSenderId: "1021590070325"
});

export const messaging = firebaseApp.messaging()
export const db = firebaseApp.database()
export const auth = firebaseApp.auth()
