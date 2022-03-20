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
      idCompra: 0,
        articulo: this.articuloNuevo,
        cliente: this.clienteNuevo,
        fecha: new Date()
      };



  //CLIENTES=====================

  private _clientes:Cliente[] = [
    {
      codCliente: 1,
      nombre:'Olegario',
      apellidos: 'Fernandez ',
      empresa: 'omicronia',
      puesto: 'Gerente',
      codigoPostal: 33300,
      provincia: 'AsturLandia',
      telefono: 675849302,
      fechaNacimiento: new Date()
    },
    {
      codCliente: 2,
      nombre:'Pepito',
      apellidos: 'Martinez',
      empresa: 'Capgemini',
      puesto: 'Piloto',
      codigoPostal: 33300,
      provincia: 'AsturLandia',
      telefono: 675849302,
      fechaNacimiento: new Date()
    },
    {
      codCliente: 3,
      nombre:'Juan',
      apellidos: 'Landa',
      empresa: 'CocaCola',
      puesto: 'Repartidor',
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
    const existe = this._clientes.filter(clie => clie.codCliente == cliente.codCliente);


    let agregarCliente:Cliente = {
      codCliente: cliente.codCliente,
      nombre:cliente.nombre,
      apellidos: cliente.apellidos,
      empresa: cliente.empresa,
      puesto: cliente.puesto,
      codigoPostal: cliente.codigoPostal,
      provincia: cliente.provincia,
      telefono: cliente.telefono,
      fechaNacimiento: cliente.fechaNacimiento
    };

    if(existe.length!=0)
    {
      let index = this._clientes.indexOf(existe[0]);
      this._clientes[index] = agregarCliente;
    }
    else{
      this._clientes.push(agregarCliente);
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
    },
    {
      codArticulo: 2,
      Nombre:'Manzana',
      Descripcion: 'Verde y fruta',
      precioUnidad: 1,
      unidadesStock: 623,
      stockSeguridad: 356,
      imagen: 'Imaginate una manzana'
    },
    {
      codArticulo: 3,
      Nombre:'Sandía',
      Descripcion: 'Grande y fruta',
      precioUnidad: 2.5,
      unidadesStock: 2563,
      stockSeguridad: 3569,
      imagen: 'Imaginate una sandía'
    }
    ];

    get articulos():Articulo[]
    {
       return [...this._articulos];
    }

  agregarArticulo(articulo:Articulo)
  {
    const existe = this._articulos.filter(artc => artc.codArticulo == articulo.codArticulo);

    let articuloNuevo:Articulo = {
      codArticulo: articulo.codArticulo,
      Nombre:articulo.Nombre,
      Descripcion: articulo.Descripcion,
      precioUnidad: articulo.precioUnidad,
      unidadesStock: articulo.unidadesStock,
      stockSeguridad: articulo.stockSeguridad,
      imagen: articulo.imagen
    };

    if(existe.length!=0)
    {
      let index = this._articulos.indexOf(existe[0]);
      this._articulos[index] = articuloNuevo;
    }
    else{
      this._articulos.push(articuloNuevo);
    }
  }

  borrarArticulo(articulo:Articulo)
  {
    this._articulos = this._articulos.filter(artc => artc !== articulo);
  }

  //COMPRAS=====================

  private _compras:Compra[] = [
    {
      idCompra: 1,
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
    },
    {
      idCompra: 2,
      articulo: {
        codArticulo: 3,
        Nombre:'Sandía',
        Descripcion: 'Grande y fruta',
        precioUnidad: 2.5,
        unidadesStock: 2563,
        stockSeguridad: 3569,
        imagen: 'Imaginate una sandía'
      },
      cliente: {
        codCliente: 3,
        nombre:'Juan',
        apellidos: 'Landa',
        empresa: 'CocaCola',
        puesto: 'Repartidor',
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

  agregarCompra(idCompra:number, idCliente:number, idArticulo:number, fecha:Date)
  {
    let clienteNuevo = this._clientes.filter(clie => clie.codCliente == idCliente);
    let articuloNuevo = this._articulos.filter(art => art.codArticulo == idArticulo);

    let compraNueva:Compra = {
      idCompra: idCompra,
      cliente: clienteNuevo[0],
      articulo: articuloNuevo[0],
      fecha: fecha
    }
    const existe = this._compras.filter(compr => compr.idCompra == idCompra);

    if(existe.length==0)
    {
      this._compras.push(compraNueva);
    }
    else{
      let index = this._compras.indexOf(existe[0]);
      this._compras[index] = compraNueva;
    }
  }

  borrarCompra(compra:Compra)
  {
    this._compras = this._compras.filter(comp => comp !== compra);
  }

  buscarCompra(idCompra:number):Compra{
    const existe = this._compras.filter(compr => compr.idCompra == idCompra);

    return existe[0];
  }
}
