import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFollowPageComponent } from './my-follow-page.component';

describe('MyFollowPageComponent', () => {
  let component: MyFollowPageComponent;
  let fixture: ComponentFixture<MyFollowPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFollowPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFollowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
