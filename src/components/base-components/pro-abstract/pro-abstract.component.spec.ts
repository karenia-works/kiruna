import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProAbstractComponent } from './pro-abstract.component';

describe('ProAbstractComponent', () => {
  let component: ProAbstractComponent;
  let fixture: ComponentFixture<ProAbstractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProAbstractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
