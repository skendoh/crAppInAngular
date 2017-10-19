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

  constructor(private homeSvr: HomeService) { }

  ngOnInit() {
    this.aCartas = this.homeSvr.getCartas();
  }

}
