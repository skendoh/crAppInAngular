import { Cartas } from '../../../class/cartas';
import { HomeService } from '../../../services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  aCartas: Array <Cartas>;
  // variable : objeto
  oCarta: Cartas;

  // inyeccion del Servicio
  constructor(private homeSvr: HomeService) { }

  // El primer metodo que se ejecuta conforme se carga la pantalla
  ngOnInit() {
    this.aCartas = [];
    // Inicia el objeto carta
    this.oCarta = new Cartas();
  }

  btnGetCard() {
    // Rellena el Array de cartas
    this.aCartas = this.homeSvr.getCartas();
  }

  btnInsertCard() {
    // Llamamos al servicio para que nos de el objeto carta para insertarlo en nuestro array aCartas
    console.log('Llamamos al BACKEND');
    this.aCartas.push(this.homeSvr.addCartas(this.oCarta));
    console.log('OK: con el binding te añadimos la carta');
    // vacia el objeto carta
    this.oCarta = new Cartas();
  }
}
