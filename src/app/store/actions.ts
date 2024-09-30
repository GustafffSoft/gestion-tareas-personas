import { createAction, props } from '@ngrx/store';

export const loadTareas = createAction('[Tareas] Load Tareas');
export const loadTareasSuccess = createAction('[Tareas] Load Tareas Success', props<{ tareas: any[] }>());
export const loadTareasFailure = createAction('[Tareas] Load Tareas Failure', props<{ error: any }>());

export const addTarea = createAction('[Tareas] Add Tarea', props<{ tarea: any }>());

export const loadPersonas = createAction('[Personas] Load Personas');
export const loadPersonasSuccess = createAction('[Personas] Load Personas Success', props<{ personas: any[] }>());
export const loadPersonasFailure = createAction('[Personas] Load Personas Failure', props<{ error: any }>());

export const addPersona = createAction('[Personas] Add Persona', props<{ persona: any }>());
