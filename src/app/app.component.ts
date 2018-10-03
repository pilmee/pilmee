import { Component, OnInit } from '@angular/core';

declare const firebase;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    const config = {
      apiKey: 'AIzaSyC1BFqPeKsUdy6-nzXeoAxSDpT-mJK-bis',
      authDomain: 'pilmee-db642.firebaseapp.com',
      databaseURL: 'https://pilmee-db642.firebaseio.com',
      projectId: 'pilmee-db642',
      storageBucket: 'pilmee-db642.appspot.com',
      messagingSenderId: '194139323967'
    };
    firebase.initializeApp(config);

    const messaging = firebase.messaging();
    messaging.requestPermission()
      .then(() => {
        return messaging.getToken();
      })
      .then((token) => console.log(token))
      .catch(() => console.log('error'));

    messaging.onMessage((payload) => console.log(payload));
  }
}
