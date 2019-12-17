import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySettingPageComponent } from './my-setting-page.component';

describe('MySettingPageComponent', () => {
  let component: MySettingPageComponent;
  let fixture: ComponentFixture<MySettingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySettingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySettingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
