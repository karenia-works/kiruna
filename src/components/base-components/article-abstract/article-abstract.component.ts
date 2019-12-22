import { Component, OnInit, Input } from '@angular/core';
import { stringify } from 'querystring';
import dayjs from 'dayjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-abstract',
  templateUrl: './article-abstract.component.html',
  styleUrls: ['./article-abstract.component.styl'],
})
export class ArticleAbstractComponent implements OnInit {
  @Input() id: number;
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

  @Input() linked: boolean = true;
  deleted: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {}

  get articleInfo(): string {
    return [
      this.articleType,
      dayjs(this.releaseDate).format('YYYY-MM-DD'),
      this.authors,
    ]
      .filter(val => val !== undefined)
      .join(' | ');
  }

  jump() {
    if (this.linked && this.id) {
      this.router.navigateByUrl('/p/' + this.id);
    }
  }
  clickEdit() {
    // 接口
  }
  clickDelete() {
    alert('删除');
    this.deleted = true;
    // 接口
  }
}
