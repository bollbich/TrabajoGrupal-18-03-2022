import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/interfaces/articulo.interfaces';
import { Cliente } from 'src/app/interfaces/cliente.interfaces';
import { Compra } from 'src/app/interfaces/compra.interfaces';
import { CrudServices } from 'src/app/service/crud.services';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  selectedClient:number = 0;
  selectedArticulo:number = 0;

  // selectedClient:Cliente = {
  //   codCliente: 0,
  //   nombre:'',
  //   apellidos: '',
  //   empresa: '',
  //   puesto: '',
  //   codigoPostal: 0,
  //   provincia: '',
  //   telefono: 0,
  //   fechaNacimiento: new Date()
  // }
  // selectedArticulo:Articulo = {
  //   codArticulo: 0,
  //     Nombre:'',
  //     Descripcion: '',
  //     precioUnidad: 0,
  //     unidadesStock: 0,
  //     stockSeguridad: 0,
  //     imagen: ''
  // }

  fecha:Date = new Date();

  idCompra:number = 0;

  constructor(public servicio:CrudServices) { }

  ngOnInit(): void {
  }

  agregarCompra()
  {
    this.servicio.agregarCompra(this.idCompra, this.selectedClient, this.selectedArticulo, this.fecha);
  }

  Delete(compra:Compra)
  {
    this.servicio.borrarCompra(compra);
  }
}
