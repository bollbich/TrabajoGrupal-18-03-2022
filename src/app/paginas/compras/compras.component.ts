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

  cargarCompra(compra:Compra){
   let compraSearch = this.servicio.buscarCompra(compra.idCompra);

    this.idCompra = compraSearch.idCompra;
    this.selectedClient = compraSearch.cliente.codCliente;
    this.selectedArticulo = compraSearch.articulo.codArticulo;
    this.fecha = compraSearch.fecha;
  }
}
