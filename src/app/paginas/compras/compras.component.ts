import { Component, OnInit } from '@angular/core';
import { CrudServices } from 'src/app/service/crud.services';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  constructor(public servicio:CrudServices) { }

  ngOnInit(): void {
  }

  agregarCompra()
  {
      this.servicio.agregarCompra();
  }

}
