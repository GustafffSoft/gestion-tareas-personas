import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TareasService } from './../../service/tareas.service';
import { PersonasService } from './../../service/personas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {
  tareasForm: FormGroup;
  personasList: any[] = [];
  personasAsignadas: any[] = [];
  guardado = false;

  constructor(private fb: FormBuilder, private tareasService: TareasService, private personasService: PersonasService) {
    this.tareasForm = this.fb.group({
      estado: ['Pendiente', Validators.required],
      descripcion: ['', Validators.required],
      personas: [[], Validators.required]
    });
  }

  ngOnInit() {
    this.personasList = this.personasService.getPersonas();
  }

  onAsignar(persona: any) {
    if (!this.personasAsignadas.includes(persona)) {
      this.personasAsignadas.push(persona);
    }
  }

  onEliminar(persona: any) {
    this.personasAsignadas = this.personasAsignadas.filter(p => p !== persona);
  }

  onSubmit() {
    if (this.tareasForm.valid) {
      const data = {
        ...this.tareasForm.value,
        personas: this.personasAsignadas
      };
      this.tareasService.addTarea(data);
      this.guardado = true;
      console.log("Tarea agregada:", data);

      setTimeout(() => {
        this.guardado = false;
      }, 3000);
    }
  }
}
