import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes/clientes.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ComprasComponent } from './compras/compras.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { CrudServices } from '../service/crud.services';


@NgModule({
  declarations: [
    ClientesComponent,
    ArticulosComponent,
    ComprasComponent
  ],
    exports:[
    ClientesComponent,
    ArticulosComponent,
    ComprasComponent
    ],
    providers:[
      CrudServices
    ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule
  ]
})
export class PaginasModule {}
