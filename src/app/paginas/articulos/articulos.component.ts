import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/interfaces/articulo.interfaces';
import { CrudServices } from 'src/app/service/crud.services';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  constructor(public servicio:CrudServices) { }


  public articuloNuevo:Articulo = {
    codArticulo: 0,
    Nombre:'',
    Descripcion: '',
    precioUnidad: 0,
    unidadesStock: 0,
    stockSeguridad: 0,
    imagen: ''
  };

  get articulo(){
    return this.articuloNuevo;
  }
  ngOnInit(): void {
  }

  agregarArticulo()
  {
      this.servicio.agregarArticulo(this.articuloNuevo);
  }

}
