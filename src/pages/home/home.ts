import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { BundlesPage } from '../bundles/bundles';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {
  	
  }

}
