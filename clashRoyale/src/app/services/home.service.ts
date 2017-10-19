import { Injectable } from '@angular/core';
import { Cartas } from '../class/cartas';
@Injectable()
export class HomeService {

  getCartas() {
    return [
      {'nombre': 'Goblins', 'coste': 5, 'img': '../../assets/Barril_de_Goblins.png'},
      {'nombre': 'Minions', 'coste': 6, 'img': '../../assets/Barril_de_Goblins.png'},
      {'nombre': 'Goblins', 'coste': 5, 'img': '../../assets/Barril_de_Goblins.png'},
      {'nombre': 'Minions', 'coste': 6, 'img': '../../assets/Barril_de_Goblins.png'},
      {'nombre': 'Goblins', 'coste': 5, 'img': '../../assets/Barril_de_Goblins.png'},
      {'nombre': 'Minions', 'coste': 6, 'img': '../../assets/Barril_de_Goblins.png'},
      {'nombre': 'Goblins', 'coste': 5, 'img': '../../assets/Barril_de_Goblins.png'},
      {'nombre': 'Minions', 'coste': 6, 'img': '../../assets/Barril_de_Goblins.png'},
      {'nombre': 'Goblins', 'coste': 5, 'img': '../../assets/Barril_de_Goblins.png'},
      {'nombre': 'Minions', 'coste': 6, 'img': '../../assets/Barril_de_Goblins.png'},
      {'nombre': 'Goblins', 'coste': 5, 'img': '../../assets/Barril_de_Goblins.png'},
      {'nombre': 'Minions', 'coste': 6, 'img': '../../assets/Barril_de_Goblins.png'},
      {'nombre': 'Goblins', 'coste': 5, 'img': '../../assets/Barril_de_Goblins.png'},
      {'nombre': 'Minions', 'coste': 6, 'img': '../../assets/Barril_de_Goblins.png'},
      {'nombre': 'Goblins', 'coste': 5, 'img': '../../assets/Barril_de_Goblins.png'},
      {'nombre': 'Minions', 'coste': 6, 'img': '../../assets/Barril_de_Goblins.png'},
      {'nombre': 'Goblins', 'coste': 5, 'img': '../../assets/Barril_de_Goblins.png'},
      {'nombre': 'Minions', 'coste': 6, 'img': '../../assets/Barril_de_Goblins.png'}
    ];
}
  addCartas(carta: Cartas) {
    // Llamada al servidor para que me añada la carta, esperamos confirmacion
    // {status:501 msgError:"El campo nombre es obligatorio"}
      console.log('BACKEND: No tenemos ningun fallo');
    return carta;
  }
}
