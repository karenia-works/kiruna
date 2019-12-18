import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProManageComponent } from './pro-manage.component';

describe('ProManageComponent', () => {
  let component: ProManageComponent;
  let fixture: ComponentFixture<ProManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
