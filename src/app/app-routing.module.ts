import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './component/personas/personas.component';
import { PersonaGridComponent } from './component/persona-grid/persona-grid.component';
import { TareasComponent } from './component/tareas/tareas.component';
import { TareasGridComponent } from './component/tareas-grid/tareas-grid.component';

const routes: Routes = [
  { path: 'personas', component: PersonasComponent },
  { path: 'personas-grid', component: PersonaGridComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'tareas-grid', component: TareasGridComponent },
  { path: '', redirectTo: '/personas', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
