import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.scss']
})
export class MapaEditarComponent implements OnInit {

  forma: FormGroup;


  constructor(public dialogRef: MatDialogRef<MapaEditarComponent>,
              public fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {

    console.log(this.data);
    this.forma = fb.group({
      'titulo': data.titulo,
      'descripcion': data.descripcion
    });
  }

  ngOnInit() {
  }

  guardarCambios(){
    this.dialogRef.close(this.forma.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
