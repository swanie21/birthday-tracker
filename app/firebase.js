const firebase = require('firebase');

  const config = {
    apiKey: 'AIzaSyCZugfXIxOccWOBkT9Xa8z5pCXKC1-d2cs',
    authDomain: 'birthday-tracker-4aad1.firebaseapp.com',
    databaseURL: 'https://birthday-tracker-4aad1.firebaseio.com',
    storageBucket: 'birthday-tracker-4aad1.appspot.com',
    messagingSenderId: '1071518708203'
  };

firebase.initializeApp(config);

export default firebase;
export const provider = new firebase.auth.GoogleAuthProvider();
