import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDownloadPageComponent } from './my-download-page.component';

describe('MyDownloadPageComponent', () => {
  let component: MyDownloadPageComponent;
  let fixture: ComponentFixture<MyDownloadPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDownloadPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDownloadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
