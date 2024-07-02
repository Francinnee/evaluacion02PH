import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CitasAleatoriasComponent } from './citas-aleatorias.component';

describe('CitasAleatoriasComponent', () => {
  let component: CitasAleatoriasComponent;
  let fixture: ComponentFixture<CitasAleatoriasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CitasAleatoriasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CitasAleatoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
