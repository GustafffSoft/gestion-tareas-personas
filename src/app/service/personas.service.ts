import { DEFAULT_PERSONAS } from './../data/data-personas';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  private personas: any[] = [...DEFAULT_PERSONAS];

  constructor() { }

  // Método para agregar una persona
  addPersona(persona: any) {
    this.personas.push(persona);
  }

  // Método para obtener todas las personas
  getPersonas() {
    return this.personas;
  }
}
