import { Component, OnInit } from '@angular/core';
import { CrudServices } from 'src/app/service/crud.services';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(public servicio:CrudServices) { }

  ngOnInit(): void {
  }

  agregarClientes()
  {
      this.servicio.agregarCliente();
  }
}
