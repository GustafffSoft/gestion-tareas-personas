import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonasService } from './../../service/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent {
  personasForm: FormGroup;
  habilidadesList: string[] = ['JavaScript', 'Angular', 'React', 'Node.js', 'CSS', 'HTML'];
  guardado = false;

  constructor(private fb: FormBuilder, private personasService: PersonasService) {
    this.personasForm = this.fb.group({
      nombre: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(0)]],
      habilidades: [[], Validators.required]
    });
  }

  onSubmit() {
    if (this.personasForm.valid) {
      const data = this.personasForm.value;
      this.personasService.addPersona(data);
      this.guardado = true;
      console.log("Persona agregada:", data);

      // Ocultar el mensaje después de un tiempo
      setTimeout(() => {
        this.guardado = false;
      }, 3000);
    }
  }
}
