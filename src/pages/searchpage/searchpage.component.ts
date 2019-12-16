import { Component, OnInit } from '@angular/core';

import {articles} from '../../articleAbstractList';
@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.styl'],
})
export class SearchpageComponent implements OnInit {
  constructor() {}
  articles = articles;
  // 分页组件配置项
  private itemsPerpage: number ;
  // 总条数
  private totalcounts: number;
  // 当前页码
  private currentPage: number = 1;
  // 页码变化，重新获取用户列表数据
  pageChanged(event) {
    // 查看监听到的数据
    console.log('event:', event);
    this.currentPage = event.page;
    this.itemsPerpage = event.itemsPerPage;
    // 重新获取用户列表数据
    // this.getUserData();
  }
  ngOnInit() {}
}

