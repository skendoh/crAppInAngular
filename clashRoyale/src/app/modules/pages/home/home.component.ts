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
  constructor(private homeSvr: HomeService) { }

  ngOnInit() {
    this.aCartas = this.homeSvr.getCartas();
    this.oCarta = new Cartas();
  }
  btnInsertCard() {
    // Llamamos al servicio para que nos de el objeto carta para insertarlo en nuestro array aCartas
    this.aCartas.push(this.homeSvr.addCartas(this.oCarta));
  }
}
