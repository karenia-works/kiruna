import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAbstractComponent } from './user-abstract.component';

describe('UserAbstractComponent', () => {
  let component: UserAbstractComponent;
  let fixture: ComponentFixture<UserAbstractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAbstractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
