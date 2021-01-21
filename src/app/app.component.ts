import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HelperProvider } from './services/helper.service';
import { AuthenticationService } from './services/authentication.service';

import { Router } from '@angular/router';
import { ViewChildren, QueryList } from '@angular/core';

import { AlertController, NavController, IonRouterOutlet } from '@ionic/angular';

import { take } from 'rxjs/operators';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inbox',
      url: '/login',
      icon: 'mail'
    },
    {
      title: 'Outbox',
      url: '/folder/Outbox',
      icon: 'paper-plane'
    },
    {
      title: 'Favorites',
      url: '/folder/Favorites',
      icon: 'heart'
    },
    {
      title: 'Archived',
      url: '/folder/Archived',
      icon: 'archive'
    },
    {
      title: 'Trash',
      url: '/folder/Trash',
      icon: 'trash'
    },
    {
      title: 'Spam',
      url: '/folder/Spam',
      icon: 'warning'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
        private alertCtrl: AlertController,
        private navCtrl: NavController,
        private auth: AuthenticationService,
        public router: Router,
        private helper: HelperProvider,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();


      const userAuthSubs = this.auth.currentAuthState.subscribe(auth => {
        console.log('App Component authState : ', auth);
        userAuthSubs.unsubscribe();

        console.log('isAuthenticated : ', this.auth.isAuthenticated());



        if (this.auth.isAuthenticated()) {
            this.helper.dismissLoader();
            //   this.navCtrl.navigateRoot('/members/home');
            this.auth.getUserById(this.auth.getUserId()).pipe(take(1)).subscribe(
                (user: any) => {
                    
                    console.log('user', user);
                     
                    this.helper.dismissLoader();

                    this.navCtrl.navigateRoot('/homenew');
                    // this.navCtrl.navigateForward('/vaultselected');

                    // this.navCtrl.navigateRoot('/prompt-listing');
                },
                err => {
                    this.helper.dismissLoader();
                    console.log(err);
                }
            );
        } else {
          console.log("dismissLoader")
            this.helper.dismissLoader();
            // this.navCtrl.navigateRoot('home');
            this.router.navigate(['/login']);
        }
    });
});
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
