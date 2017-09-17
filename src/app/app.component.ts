import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  switches : boolean[]=[true,true,true,true,true];
  changeSwitch = function(idx){
    this.switches[idx] = !this.switches[idx];


  }
}
