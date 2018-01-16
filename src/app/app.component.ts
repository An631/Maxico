import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'app';
  isOpen:boolean = false;

  toggleSidedrawer() {
    console.log("opening sidedrawer");
    this.isOpen=!this.isOpen;
  }
}
