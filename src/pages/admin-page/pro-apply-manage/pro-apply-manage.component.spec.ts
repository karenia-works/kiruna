import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProApplyManageComponent } from './pro-apply-manage.component';

describe('ProApplyManageComponent', () => {
  let component: ProApplyManageComponent;
  let fixture: ComponentFixture<ProApplyManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProApplyManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProApplyManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
