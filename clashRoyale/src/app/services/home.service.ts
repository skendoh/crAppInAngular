import { Injectable } from '@angular/core';
import { Cartas } from '../class/cartas';
import { Mazos } from '../class/mazos';
@Injectable()
export class HomeService {

  getCartas() {
    return [
      {'id': 1, 'nombre': 'Barril de Goblins', 'coste': 5, 'img': '../../assets/barril_goblins.png'},
      {'id': 2, 'nombre': 'Barbaros de Elite', 'coste': 6, 'img': '../../assets/barbaros_elite.png'},
      {'id': 3, 'nombre': 'Arqueras', 'coste': 5, 'img': '../../assets/arqueras.png'},
      {'id': 4, 'nombre': 'Bebe Dragon', 'coste': 6, 'img': '../../assets/bebe_dragon.png'},
      {'id': 5, 'nombre': 'Bola de Fuego', 'coste': 5, 'img': '../../assets/bola_fuego.png'},
      {'id': 6, 'nombre': 'Bombardero', 'coste': 6, 'img': '../../assets/bombardero.png'},
      {'id': 7, 'nombre': 'Bruja', 'coste': 5, 'img': '../../assets/bruja.png'},
      {'id': 8, 'nombre': 'Caballero', 'coste': 6, 'img': '../../assets/caballero.png'},
      {'id': 9, 'nombre': 'Cementerio', 'coste': 5, 'img': '../../assets/cementerio.png'},
      {'id': 10, 'nombre': 'Ejercito de Esqueletos', 'coste': 6, 'img': '../../assets/ejercito_esqueletos.png'},
      {'id': 11, 'nombre': 'Flechas', 'coste': 5, 'img': '../../assets/flechas.png'},
      {'id': 12, 'nombre': 'Gigante', 'coste': 6, 'img': '../../assets/gigante.png'},
      {'id': 13, 'nombre': 'Mini PEKKA', 'coste': 5, 'img': '../../assets/mini_pekka.png'},
      {'id': 14, 'nombre': 'Mosquetera', 'coste': 6, 'img': '../../assets/mosquetera.png'},
      {'id': 15, 'nombre': 'Principe', 'coste': 5, 'img': '../../assets/principe.png'},
      {'id': 16, 'nombre': 'Tornado', 'coste': 6, 'img': '../../assets/tornado.png'}
    ];
}
  getMazo() {

    return [
      {'nombre' : 'Mazo 1' , 'cartas':
      [{'id': 1, 'nombre': 'Barril de Goblins', 'coste': 5, 'img': '../../assets/barril_goblins.png'},
      {'id': 1, 'nombre': 'Barril de Goblins', 'coste': 5, 'img': '../../assets/barril_goblins.png'},
      {'id': 1, 'nombre': 'Barril de Goblins', 'coste': 5, 'img': '../../assets/barril_goblins.png'},
      {'id': 1, 'nombre': 'Barril de Goblins', 'coste': 5, 'img': '../../assets/barril_goblins.png'},
      {'id': 1, 'nombre': 'Barril de Goblins', 'coste': 5, 'img': '../../assets/barril_goblins.png'},
      {'id': 1, 'nombre': 'Barril de Goblins', 'coste': 5, 'img': '../../assets/barril_goblins.png'},
      {'id': 1, 'nombre': 'Barril de Goblins', 'coste': 5, 'img': '../../assets/barril_goblins.png'},
      {'id': 1, 'nombre': 'Barril de Goblins', 'coste': 5, 'img': '../../assets/barril_goblins.png'}
      ]},
      {'nombre' : 'Mazo 2' , 'cartas':
      [{'id': 1, 'nombre': 'Barril de Goblins', 'coste': 5, 'img': '../../assets/barril_goblins.png'},
      {'id': 1, 'nombre': 'Barril de Goblins', 'coste': 5, 'img': '../../assets/barril_goblins.png'},
      {'id': 1, 'nombre': 'Barril de Goblins', 'coste': 5, 'img': '../../assets/barril_goblins.png'},
      {'id': 1, 'nombre': 'Barril de Goblins', 'coste': 5, 'img': '../../assets/barril_goblins.png'},
      {'id': 1, 'nombre': 'Barril de Goblins', 'coste': 5, 'img': '../../assets/barril_goblins.png'},
      {'id': 1, 'nombre': 'Barril de Goblins', 'coste': 5, 'img': '../../assets/barril_goblins.png'},
      {'id': 1, 'nombre': 'Barril de Goblins', 'coste': 5, 'img': '../../assets/barril_goblins.png'},
      {'id': 1, 'nombre': 'Barril de Goblins', 'coste': 5, 'img': '../../assets/barril_goblins.png'}
      ]},
      {'nombre' : 'Mazo 3' , 'cartas':
      [{'id': 1, 'nombre': 'Barril de Goblins', 'coste': 5, 'img': '../../assets/barril_goblins.png'},
      {'id': 1, 'nombre': 'Barril de Goblins', 'coste': 5, 'img': '../../assets/barril_goblins.png'},
      {'id': 1, 'nombre': 'Barril de Goblins', 'coste': 5, 'img': '../../assets/barril_goblins.png'},
      {'id': 1, 'nombre': 'Barril de Goblins', 'coste': 5, 'img': '../../assets/barril_goblins.png'},
      {'id': 1, 'nombre': 'Barril de Goblins', 'coste': 5, 'img': '../../assets/barril_goblins.png'},
      {'id': 1, 'nombre': 'Barril de Goblins', 'coste': 5, 'img': '../../assets/barril_goblins.png'},
      {'id': 1, 'nombre': 'Barril de Goblins', 'coste': 5, 'img': '../../assets/barril_goblins.png'},
      {'id': 1, 'nombre': 'Barril de Goblins', 'coste': 5, 'img': '../../assets/barril_goblins.png'}
      ]}
    ];
  }
  addCartas(carta: Cartas) {
    // Llamada al servidor para que me añada la carta, esperamos confirmacion
    // {status:501 msgError:"El campo nombre es obligatorio"}
      console.log('BACKEND: No tenemos ningun fallo');
    return carta;
  }
}
