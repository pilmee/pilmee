importScripts('https://www.gstatic.com/firebasejs/5.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.2/firebase-messaging.js');

var config = {
  apiKey: 'AIzaSyC1BFqPeKsUdy6-nzXeoAxSDpT-mJK-bis',
  authDomain: 'pilmee-db642.firebaseapp.com',
  databaseURL: 'https://pilmee-db642.firebaseio.com',
  projectId: 'pilmee-db642',
  storageBucket: 'pilmee-db642.appspot.com',
  messagingSenderId: '194139323967'
};
firebase.initializeApp(config);

var messaging = firebase.messaging();
