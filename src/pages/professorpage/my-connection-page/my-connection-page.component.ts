import { Component, OnInit } from '@angular/core';
import {connections} from '../../../connectionList';
import {PageChangedEvent} from '../../../components/base-components/paginator/paginator.component';

@Component({
  selector: 'app-my-connection-page',
  templateUrl: './my-connection-page.component.html',
  styleUrls: ['./my-connection-page.component.styl'],
})
export class MyConnectionPageComponent implements OnInit {
  connections = connections;
  returnedArray;
  articleNum;

  constructor() {}

  ngOnInit() {
    this.returnedArray = this.connections.slice(0, 5);
    this.articleNum = '30';
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.connections.slice(startItem, endItem);
  }
}
