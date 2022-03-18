import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './paginas/articulos/articulos.component';
import { ClientesComponent } from './paginas/clientes/clientes.component';
import { ComprasComponent } from './paginas/compras/compras.component';

const routes: Routes = [

  {
    path: '',
    component:ClientesComponent,
    pathMatch:'full'
  },
  {
    path: 'clientes',
    component:ClientesComponent,
  },
  {
    path: 'articulos',
    component: ArticulosComponent,
  },
  {
    path: 'compras',
    component: ComprasComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
