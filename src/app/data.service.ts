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
              "billboard":"assets/Aguascalientes/SanJosédeGracia/main.jpg",
          },
          "Details": `San José de Gracia recibió la etiqueta de pueblo mágico en la ciudad de puebla el 25 de septiembre del 2015, fecha que quedara guardada en la historia del Pueblo josefino.

El nombramiento fue recibido por el Profr.Antonio Alberto Martínez Rodríguez presidente Municipal de San José de Gracia de manos del titular de la secretaria de turismo federal Lic.Enrique de la Madrid.

Para lograr que Nuestro pueblo este dentro de los 111 pueblos mágico se llevó a cabo un proceso de casi un año de trabajo de la mayoría de las áreas del H.Ayuntamiento, SECTURE, asi como de diversos grupos, comerciantes, artesanos para lograr la conformación de un comité ciudadano principal requerimiento de la convocatoria.

Para concluir con estos trabajos y lograr el resultado tan anhelado de ser pueblo mágico recibimos el apoyo incondicional del personal de la Secretaria de Turismo del Estado cuyo titular Lic.Alejandro Ponce.`
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
