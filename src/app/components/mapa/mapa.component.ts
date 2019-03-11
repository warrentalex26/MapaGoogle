import { Component, OnInit } from '@angular/core';
import {Marcador} from '../../class/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];

  lat = 51.678418;
  lng = 7.809007;

  constructor() {
    // const nuevoMarcador = new Marcador(51.678418, 7.809007);
    // this.marcadores.push(nuevoMarcador);

    // Recuperamos la informacion del localstorage
    if (localStorage.getItem('marcadores')){
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    } else {

    }
  }

  ngOnInit() {
  }

  agregarMarcador(evento) {

    const coords = evento.coords;

    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
  }

  // El localstorage solo permite almacenar String

  guardarStorage() {
    // Ocupamos el JSON.stringify para guardarlo en el localstorage ya que no es un string puro
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

}
