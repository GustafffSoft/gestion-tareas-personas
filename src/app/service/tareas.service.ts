import { Injectable } from '@angular/core';
import { DEFAULT_TAREAS } from './../data/data-tareas';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private tareas: any[] = [...DEFAULT_TAREAS];

  constructor() {}

  addTarea(tarea: any) {
    this.tareas.push(tarea);
  }

  getTareas() {
    return this.tareas;
  }
}
