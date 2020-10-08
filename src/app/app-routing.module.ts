import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaErrorComponent } from './Components/Pages/ruta-error/ruta-error.component';
import { RutaHomeComponent } from './Components/Pages/ruta-home/ruta-home.component';

const routes: Routes = [
  {path:'',component:RutaHomeComponent},
  {path:'**',component:RutaErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
