import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;
  navigate2: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  //for side nav
  sideMenu(){
    this.navigate = [
      {
        title: 'Home',
        url: '/restaurants',
        icon: 'home'
      },
      {
        title: 'Trivia',
        url: '/trivia',
        icon: 'information-circle'
      },
      {
        title: 'Settings',
        url: 'settings',
        icon: 'cog'
      },
      {
        title: 'Log Out',
        url: '/logout',
        icon: 'log-out'
      }
    ];

    //Bottom "Log Out Button"
    // this.navigate2 = [
    //   {
    //     title: 'Log Out',
    //     url: '/logout',
    //     icon: 'log-out'
    //   }
    // ];
  }
}
