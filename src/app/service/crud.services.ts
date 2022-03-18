import { Injectable } from "@angular/core";
import { Articulo } from "../interfaces/articulo.interfaces";
import { Cliente } from "../interfaces/cliente.interfaces";
import { Compra } from "../interfaces/compra.interfaces";

@Injectable()
export class CrudServices{

  display: boolean = false;

  constructor(){}

  showDialog() {

    this.display = true;

}

public clienteNuevo:Cliente = {
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

  public articuloNuevo:Articulo = {
      codArticulo: 0,
      Nombre:'',
      Descripcion: '',
      precioUnidad: 0,
      unidadesStock: 0,
      stockSeguridad: 0,
      imagen: ''
    };

    public compraNuevo:Compra = {
        articulo: this.articuloNuevo,
        cliente: this.clienteNuevo,
        fecha: new Date()
      };



  //CLIENTES=====================

  private _clientes:Cliente[] = [
    {
      codCliente: 1,
      nombre:'Olegario',
      apellidos: 'fernandez gonzalez',
      empresa: 'omicronia',
      puesto: 'gerente jefe',
      codigoPostal: 33300,
      provincia: 'AsturLandia',
      telefono: 675849302,
      fechaNacimiento: new Date()
    }
    ];

    get clientes():Cliente[]
    {
       return [...this._clientes];
    }

  agregarCliente(cliente:Cliente)
  {
    const exite = this._clientes.filter(clie => clie == cliente);
    if(exite.length==0)
    {
      if(cliente.nombre!='')
      {
        this._clientes.push(cliente);
      }
    }
  }

  borrarCliente(cliente:Cliente)
  {
    this._clientes = this._clientes.filter(clie => clie !== cliente);
  }

  //ARTICULOS=====================

  private _articulos:Articulo[] = [
    {
      codArticulo: 1,
      Nombre:'Coco',
      Descripcion: 'Redondo y fruta',
      precioUnidad: 100,
      unidadesStock: 100,
      stockSeguridad: 123,
      imagen: 'Imaginate un coco'
    }
    ];

    get articulos():Articulo[]
    {
       return [...this._articulos];
    }

  agregarArticulo(articulo:Articulo)
  {
    let articuloNuevo:Articulo = {
      codArticulo: articulo.codArticulo,
      Nombre:articulo.Nombre,
      Descripcion: articulo.Descripcion,
      precioUnidad: articulo.precioUnidad,
      unidadesStock: articulo.unidadesStock,
      stockSeguridad: articulo.stockSeguridad,
      imagen: articulo.imagen
    };
    console.log(this._articulos);
    console.log(articulo);

    this._articulos.push(articuloNuevo);

  }

  borrarArticulo(articulo:Articulo)
  {
    this._articulos = this._articulos.filter(artc => artc !== articulo);
  }

  //COMPRAS=====================

  private _compras:Compra[] = [
    {
      articulo: {
        codArticulo: 1,
        Nombre:'Coco',
        Descripcion: 'Redondo y fruta',
        precioUnidad: 100,
        unidadesStock: 100,
        stockSeguridad: 123,
        imagen: 'Imaginate un coco'
      },
      cliente: {
        codCliente: 1,
        nombre:'Olegario',
        apellidos: 'fernandez gonzalez',
        empresa: 'omicronia',
        puesto: 'gerente jefe',
        codigoPostal: 33300,
        provincia: 'AsturLandia',
        telefono: 675849302,
        fechaNacimiento: new Date()
      },
      fecha: new Date()
    }
    ];

    get compras():Compra[]
    {
       return [...this._compras];
    }

  agregarCompra(compra:Compra)
  {
    const exite = this._compras.filter(compr => compr == compra);
    if(exite.length==0)
    {
      this._compras.push(compra);
    }
  }

  borrarCompra(compra:Compra)
  {
    this._compras = this._compras.filter(comp => comp !== compra);
  }
}
