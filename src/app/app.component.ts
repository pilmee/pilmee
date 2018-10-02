import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    const OneSignal = window['OneSignal'] || [];
    console.log('Init OneSignal');
    OneSignal.push(['init', {
      appId: 'e0f8cdd9-bd96-4c1d-96de-ee4aef70bf44',
      autoRegister: false,
      allowLocalhostAsSecureOrigin: true,
      notifyButton: {
        enable: false
      }
    }]);
    console.log('OneSignal Initialized');
    OneSignal.push(function () {
      console.log('Register For Push');
      OneSignal.push(['registerForPushNotifications']);
    });
    OneSignal.push(function () {
      // Occurs when the user's subscription changes to a new value.
      OneSignal.on('subscriptionChange', function (isSubscribed) {
        console.log('The users subscription state is now:', isSubscribed);
        OneSignal.getUserId().then(function (userId) {
          console.log('User ID is', userId);
        });
      });
    });
  }
}
