import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleAbstractComponent } from './article-abstract.component';

describe('ArticleAbstractComponent', () => {
  let component: ArticleAbstractComponent;
  let fixture: ComponentFixture<ArticleAbstractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleAbstractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
