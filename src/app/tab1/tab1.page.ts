import { Component } from '@angular/core';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  constructor(private flashlight: Flashlight) { }

  TorchOn() {
      this.flashlight.switchOn();
    };
   
  TorchOff() {
    this.flashlight.switchOff();
    }
  }

