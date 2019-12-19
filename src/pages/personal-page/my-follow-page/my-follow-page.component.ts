import { Component, OnInit } from '@angular/core';
import { follows } from '../../../followList';
import { PageChangedEvent } from 'src/components/base-components/paginator/paginator.component';

@Component({
  selector: 'app-my-follow-page',
  templateUrl: './my-follow-page.component.html',
  styleUrls: ['./my-follow-page.component.styl'],
})
export class MyFollowPageComponent implements OnInit {
  follows = follows;
  returnedArray;

  constructor() {}

  ngOnInit() {
    this.returnedArray = this.follows.slice(0, 5);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.follows.slice(startItem, endItem);
  }

  onClickMe() {
    alert('您已取消关注！');
    // 接口
  }
}
