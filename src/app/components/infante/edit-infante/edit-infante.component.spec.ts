import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInfanteComponent } from './edit-infante.component';

describe('EditInfanteComponent', () => {
  let component: EditInfanteComponent;
  let fixture: ComponentFixture<EditInfanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInfanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInfanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
