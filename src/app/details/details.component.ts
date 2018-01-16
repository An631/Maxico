import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  private subscription: any;
  cID: number;
  eID: number;
  pueblos:any;
  cityName:string;
  mainImg:string;
  details:string;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
      this.subscription = this.route.params.subscribe(res => {
        this.cID = res['cID'];
        this.eID = res['eID'];
      }
    );
  }

  ngOnInit() {
    this._data.pueblo.subscribe(res => this.pueblos = res);
    this.cityName = this.pueblos[this.eID]["Ciudades"][this.cID]["Nombre"];
    this.mainImg = this.pueblos[this.eID]["Ciudades"][this.cID]["Fotos"]["main"];
    this.details = this.pueblos[this.eID]["Ciudades"][this.cID]["Details"];
  }

}
