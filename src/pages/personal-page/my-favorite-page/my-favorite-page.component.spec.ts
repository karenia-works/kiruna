import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavoritePageComponent } from './my-favorite-page.component';

describe('MyFavoritePageComponent', () => {
  let component: MyFavoritePageComponent;
  let fixture: ComponentFixture<MyFavoritePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFavoritePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFavoritePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
