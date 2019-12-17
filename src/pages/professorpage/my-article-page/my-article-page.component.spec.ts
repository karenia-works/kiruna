import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyArticlePageComponent } from './my-article-page.component';

describe('MyArticlePageComponent', () => {
  let component: MyArticlePageComponent;
  let fixture: ComponentFixture<MyArticlePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyArticlePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
