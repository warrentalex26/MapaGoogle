import { Component, OnInit } from '@angular/core';
import {Marcador} from '../../class/marcador.class';
import {MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MapaEditarComponent} from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];

  lat = 51.678418;
  lng = 7.809007;

  constructor(public snackBarRef: MatSnackBar,
              public dialog: MatDialog) {
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
    this.snackBarRef.open('Marcador agregado', 'Cerrar', {duration: 3000});

  }

  borrarMarcador(i) {
    console.log(i);
    this.marcadores.splice(i, 1);
    this.guardarStorage();
    this.snackBarRef.open('Marcador Borrado', 'Cerrar', {duration: 3000});
  }

  editarMarcador(marcador: Marcador) {
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {titulo: marcador.titulo, descripcion: marcador.descripcion}
    });
  }

  // El localstorage solo permite almacenar String
  guardarStorage() {
    // Ocupamos el JSON.stringify para guardarlo en el localstorage ya que no es un string puro
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

}
