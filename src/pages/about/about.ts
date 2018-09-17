import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare let cordova: any;
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  changeName() { 
    cordova.plugins.MyPlugin.plus(2,3,result =>{
      alert(result);
    },error =>alert(error))
  } 


}
