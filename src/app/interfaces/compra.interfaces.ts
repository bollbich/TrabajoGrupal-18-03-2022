import { Articulo } from "./articulo.interfaces";
import { Cliente } from "./cliente.interfaces";

export interface Compra
{
  idCompra:number;

  cliente:Cliente;

  articulo:Articulo;

  fecha:Date;
}
