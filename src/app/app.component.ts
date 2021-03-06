import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage : any = TabsPage ;
    
  //pages: Array< {title: string, component: any} >;


  constructor(platform: Platform, menu: MenuController) {
    //initialize
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    

    /*this.pages = [
      { title: '', component: page },
      { title: '', component: page }
    ]; */
  }
}
