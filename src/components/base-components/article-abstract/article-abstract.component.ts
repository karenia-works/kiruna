import { Component, OnInit, Input } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-article-abstract',
  templateUrl: './article-abstract.component.html',
  styleUrls: ['./article-abstract.component.styl'],
})
export class ArticleAbstractComponent implements OnInit {
  @Input() title: string;
  @Input() articleType?: string;
  @Input() abstract?: string;
  @Input() authors?: string[];
  @Input() releaseDate?: Date;
  @Input() tags?: string[];

  @Input() refCount?: number;
  @Input() downloadCount?: number;
  @Input() hasFile: boolean;
  @Input() showFavorite: boolean;
  @Input() hasBtn: boolean = false;
  constructor() {}

  ngOnInit() {}

  get articleInfo(): string {

    return [this.articleType, this.releaseDate.toLocaleDateString(), this.authors]
      .filter(val => val !== undefined)
      .join(' | ');
  }
}
