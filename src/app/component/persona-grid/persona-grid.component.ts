import { Component, OnInit } from '@angular/core';
import { PersonasService } from './../../service/personas.service';

@Component({
  selector: 'app-persona-grid',
  templateUrl: './persona-grid.component.html',
  styleUrls: ['./persona-grid.component.scss']
})
export class PersonaGridComponent implements OnInit {
  personas: any[] = [];
  displayedColumns: string[] = ['nombre', 'edad', 'habilidades'];

  constructor(private personasService: PersonasService) {}

  ngOnInit() {
    this.personas = this.personasService.getPersonas();
  }
}
