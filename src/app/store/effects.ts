import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as appActions from './actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  loadTareas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.loadTareas),
      mergeMap(() =>
        this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos').pipe(
          map(tareas => appActions.loadTareasSuccess({ tareas })),
          catchError(error => of(appActions.loadTareasFailure({ error })))
        )
      )
    )
  );

  loadPersonas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.loadPersonas),
      mergeMap(() =>
        this.http.get<any[]>('/api/personas-endpoint').pipe(
          map(personas => appActions.loadPersonasSuccess({ personas })),
          catchError(error => of(appActions.loadPersonasFailure({ error })))
        )
      )
    )
  );
}
