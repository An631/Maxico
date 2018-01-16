import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private pueblos = new BehaviorSubject<any>(
    [
      {
      "Estado": "Aguascalientes",
      "Foto": "assets/Aguascalientes/main.jpg",
      "Ciudades": [
          {
            "Nombre": "San José de Gracia",
            "Fotos":{
              "main":"assets/Aguascalientes/SanJosédeGracia/cristo_roto.jpg",
              "billboard":"assets/Aguascalientes/SanJosédeGracia/billboard.jpg",
          },
          "Details": `This modest "Magical Town", located on the banks of the Plutarco Elias Calles Dam, has become famous for a stunning sculpture, located on a small islet over the dam, that features Christ without his right arm and leg, hence the name, Cristo Roto or “Broken Christ.” This impressive statue is a reminder of the meaning of faith.

In addition, San José de Gracia offers the Boca del Tunel Adventure Park, where the green scent of the scenery will overtake you from the moment you set foot in that wonderful canyon. Everywhere you look you will find the exuberance of nature in Aguascalientes, with its green and rivers in contrast, the hanging bridges, the rock formations and its immense lagoon.   

Come to live a unique experience in one of Mexico's Pueblos mágicos; visit San José de Gracia.`
          },
          {
            "Nombre": "Calvillo",
            "Fotos": {
              "main":"assets/Aguascalientes/Calvillo/main.jpg",
              "billboard": "assets/Aguascalientes/Calvillo/billboard.jpg",
            },
            "Details": `This fertile village that smells of guava welcomes its visitors with beautiful religious architecture, such as the Parroquia del Señor del Salitre. It also has some natural jewels, since the town is surrounded by several dams and the imposing Sierra Fria. The town provides the perfect setting for those seeking adventure; enjoy cycling, hiking or rappelling, camping and sport fishing in the Alamitos dam. There is no better place to relax than this "Magical Town", with its Los Huenchos and Garruño waterfalls, and the Cienega de Quijas plateau.

Come to live a unique experience in one of Mexico's Pueblos mágicos; visit Calvillo`
          },
          {
            "Nombre": "Real de Asientos",
            "Fotos": {
              "main":"assets/Aguascalientes/RealdeAsientos/main.jpg",
              "billboard": "assets/Aguascalientes/RealdeAsientos/main.jpg",
            },
            "Details": `
In this small “Magical Town” in Aguascalientes, a semi-desert town that used to be a mining outpost, visitors can tour underground tunnels, spot high-quality religious art, listen to stories about the State’s oldest cemetery or learn to shoot arrows like the Chichimecas used to.

On its different tours you will find places such as El Galerón de los Esclavos, where you will have the opportunity to glimpse an old world where slavery was legal. You will be amazed by the unusual contrasts and pink arches of the former convent of Tepozá, and at Museo Vivo de Cactáceas, you will discover a display of agave as well as exotic plants from South Africa and Madagascar. You can also walk around the old town where any of its monuments will dazzle you, including La Casa Larrañaga or La Casa del Minero, which feature sculpted religious anagrams in pink quarry stone and detailed ironwork on doors and windows.

Come to live a unique experience in one of Mexico's Pueblos mágicos; visit Real de Asientos.`
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
