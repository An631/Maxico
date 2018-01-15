import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pueblos =[];

  constructor(private _data:DataService) { }

  ngOnInit() {
    this._data.pueblo.subscribe(res=>this.pueblos=res)
    console.log(this.pueblos.length);
    this._data.changePueblos(this.pueblos);
  }

  addVisited(a)
  {
    console.log(a);
  }
}
