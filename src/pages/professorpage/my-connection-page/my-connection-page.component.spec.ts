import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyConnectionPageComponent } from './my-connection-page.component';

describe('MyConnectionPageComponent', () => {
  let component: MyConnectionPageComponent;
  let fixture: ComponentFixture<MyConnectionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyConnectionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyConnectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
