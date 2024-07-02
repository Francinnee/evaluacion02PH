import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CitasFormGestionComponent } from './citas-form-gestion.component';

describe('CitasFormGestionComponent', () => {
  let component: CitasFormGestionComponent;
  let fixture: ComponentFixture<CitasFormGestionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CitasFormGestionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CitasFormGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
