import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'educacion', component: EducacionComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'conocimientos', component: CursosComponent},
  {path: 'contacto', component: ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
