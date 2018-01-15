import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private pueblos = new BehaviorSubject<any>(
    [
      {
      "id":1,
      "Estado": "Aguascalientes",
      "Ciudades": [
          {
            "id":1,
            "Nombre": "San José de Gracia"
          },
          {
            "id": 2,
            "Nombre": "Calvillo"
          },
          {
            "id": 3,
            "Nombre": "Real de Asientos"
          }
        ]
      },
      {
      "id":2,
      "Estado": "Baja California",
      "Ciudades": [
          {
            "id": 1,
            "Nombre": "Tecate"
          }
        ]
      },
    ]
  );

  pueblo = this.pueblos.asObservable();

  constructor() { }

  changePueblos(pueblo)
  {
    this.pueblos.next(pueblo);
  }
}
