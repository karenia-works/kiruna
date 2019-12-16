import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorpageComponent } from './professorpage.component';

describe('ProfessorpageComponent', () => {
  let component: ProfessorpageComponent;
  let fixture: ComponentFixture<ProfessorpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
