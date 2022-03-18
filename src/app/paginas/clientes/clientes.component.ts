import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente.interfaces';
import { CrudServices } from 'src/app/service/crud.services';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clienteNuevo:Cliente = {
    codCliente: 0,
    nombre:'',
    apellidos: '',
    empresa: '',
    puesto: '',
    codigoPostal: 0,
    provincia: '',
    telefono: 0,
    fechaNacimiento: new Date()
  };

  constructor(public servicio:CrudServices) { }

  ngOnInit(): void {
  }

  agregarClientes()
  {
      this.servicio.agregarCliente(this.clienteNuevo);
  }

  Delete(cliente:Cliente)
  {
      this.servicio.borrarCliente(cliente);
  }

  Captura(cliente:Cliente)
  {
    this.servicio.agregarCliente(this.clienteNuevo);
  }
}
