import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-bundles',
  templateUrl: 'bundles.html'
})
export class BundlesPage {

  constructor(public navCtrl: NavController) {

  }

  enter() {
  	this.navCtrl.setRoot(TabsPage);
  }

}
