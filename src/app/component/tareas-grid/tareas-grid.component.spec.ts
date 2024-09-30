import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasGridComponent } from './tareas-grid.component';

describe('TareasGridComponent', () => {
  let component: TareasGridComponent;
  let fixture: ComponentFixture<TareasGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TareasGridComponent]
    });
    fixture = TestBed.createComponent(TareasGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
