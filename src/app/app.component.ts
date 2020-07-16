import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
  {
    title: 'Profile',
    url: '/profile',
    icon: 'person'
  },
  {
    title: 'Pending',
    url: '/pendingtask',
    icon: 'alert-circle'
  },

  {
    title: 'Completed',
    url: '/createdtask',
    icon: 'checkbox'
  },
  {
    title: 'Rejected',
    url: '/pendingtask',
    icon: 'alert-circle'
  },
  {
    title: 'Trash',
    url: '/createdtask',
    icon: 'trash'
  },

  {
    title: 'Create List',
    url: '/createlist',
    icon: 'add'
  },
  {
    title: 'Help',
    url: '/createdtask',
    icon: 'help-buoy'
  },
  {
    title: 'About',
    url: '/createdtask',
    icon: 'information-circle'
  }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router
    ) {
    this.initializeApp();
  }

  initializeApp() {



    this.router.navigateByUrl('welcomescreen');
    // this.router.navigateByUrl('userlist');
    // this.router.navigateByUrl('intro');
    // this.router.navigateByUrl('registration');
    // this.router.navigateByUrl('otp');
    // this.router.navigateByUrl('createtask');
    // this.router.navigateByUrl('groupmanage');
    // this.router.navigateByUrl('createdtask');
    // this.router.navigateByUrl('notask');
    // this.router.navigateByUrl('viewtask');
    // this.router.navigateByUrl('listtask');
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // this.StatusBar.overlaysWebView(true);
      // this.StatusBar.backgroundColorByHexString('#33000000');
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('pages/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }

    
  }


}
