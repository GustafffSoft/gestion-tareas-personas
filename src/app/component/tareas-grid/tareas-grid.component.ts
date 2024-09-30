import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TareasService } from './../../service/tareas.service';

@Component({
  selector: 'app-tareas-grid',
  templateUrl: './tareas-grid.component.html',
  styleUrls: ['./tareas-grid.component.scss']
})
export class TareasGridComponent implements OnInit {
  private tareasSubject = new BehaviorSubject<any[]>([]);
  tareas$ = this.tareasSubject.asObservable();

  displayedColumns: string[] = ['descripcion', 'estado'];

  constructor(private tareasService: TareasService) {
    const tareas = this.tareasService.getTareas();
    this.tareasSubject.next(tareas);
  }

  ngOnInit() {
  }
}
