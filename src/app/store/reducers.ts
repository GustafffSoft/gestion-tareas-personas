import { createReducer, on, Action } from '@ngrx/store';
import { loadTareasSuccess, loadPersonasSuccess, addTarea, addPersona } from './actions';

export interface AppState {
  tareas: any[];
  personas: any[];
}

export const initialState: AppState = {
  tareas: [],
  personas: []
};

const _appReducer = createReducer(
  initialState,
  on(loadTareasSuccess, (state, { tareas }) => ({ ...state, tareas })),
  on(addTarea, (state, { tarea }) => ({ ...state, tareas: [...state.tareas, tarea] })),
  on(loadPersonasSuccess, (state, { personas }) => ({ ...state, personas })),
  on(addPersona, (state, { persona }) => ({ ...state, personas: [...state.personas, persona] }))
);

export function appReducer(state: AppState | undefined, action: Action) {
  return _appReducer(state, action);
}
