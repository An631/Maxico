import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private pueblos = new BehaviorSubject<any>(
    [
      {
      "id":1,
      "Estado": "Aguascalientes",
      "Foto": "../../assets/Aguascalientes/main.jpg",
      "Ciudades": [
          {
            "id":1,
            "Nombre": "San José de Gracia",
            "Fotos":[
              "../../assets/Aguascalientes/SanJosédeGracia/main.jpg",
              "../../assests/Aguascalientes/SanJoséDeGracia/cristo_roto.jpg",
            ],
          },
          {
            "id": 2,
            "Nombre": "Calvillo",
            "Fotos": [
            "../../assets/Aguascalientes/Calvillo/main.jpg",
            ],
          },
          {
            "id": 3,
            "Nombre": "Real de Asientos",
            "Fotos": [
              "../../assets/Aguascalientes/RealdeAsientos/main.jpg",
            ],
          }
        ]
      }
    ]
  );

  pueblo = this.pueblos.asObservable();

  constructor() { }

  changePueblos(pueblo)
  {
    this.pueblos.next(pueblo);
  }
}
