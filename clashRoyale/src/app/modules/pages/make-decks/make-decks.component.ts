import { Mazos } from '../../../class/mazos';
import { Cartas } from '../../../class/cartas';
import { HomeService } from '../../../services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-decks',
  templateUrl: './make-decks.component.html',
  styleUrls: ['./make-decks.component.css']
})
export class MakeDecksComponent implements OnInit {

  aCartas: Array <Cartas>;
  // variable : objeto
  oCarta: Cartas;
  oMazo: Mazos;
  selectedObject: any;
  // inyeccion del Servicio
  constructor(private homeSvr: HomeService) { }

  // El primer metodo que se ejecuta conforme se carga la pantalla
  ngOnInit() {
     // Rellena el Array de cartas
     this.aCartas = this.homeSvr.getCartas();
    // Inicia el objeto carta
    this.oCarta = new Cartas();
    this.oMazo = new Mazos();
    this.oMazo.cartas = [];
  }

  btnInsertCard() {
    // Llamamos al servicio para que nos de el objeto carta para insertarlo en nuestro array aCartas
    console.log('Llamamos al BACKEND');
    this.aCartas.push(this.homeSvr.addCartas(this.oCarta));
    console.log('OK: con el binding te añadimos la carta');
    // vacia el objeto carta
    this.oCarta = new Cartas();
  }

  fcnInsertCardToDeck(oCarta, index) {
    if (this.oMazo.cartas.length === 8) {

    }else {
      this.oMazo.cartas.push(oCarta);
      console.log(index);
      console.log('Antes: ' + this.aCartas.length);
      this.aCartas.splice(index , 1);
      console.log('Despues: ' + this.aCartas.length);
    }
  }

  fcnDeleteCardToDeck(oCarta, index) {
      this.aCartas.push(oCarta);
      this.oMazo.cartas.splice(index, 1);
  }

}
