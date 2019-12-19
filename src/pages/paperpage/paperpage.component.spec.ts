import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperpageComponent } from './paperpage.component';

describe('PaperpageComponent', () => {
  let component: PaperpageComponent;
  let fixture: ComponentFixture<PaperpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
