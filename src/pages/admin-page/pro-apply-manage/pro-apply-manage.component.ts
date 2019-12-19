import { Component, OnInit } from '@angular/core';
import {professors} from '../../../proAbstractList';
import { PageChangedEvent } from '../../../components/base-components/paginator/paginator.component';

@Component({
  selector: 'app-pro-apply-manage',
  templateUrl: './pro-apply-manage.component.html',
  styleUrls: ['./pro-apply-manage.component.styl']
})
export class ProApplyManageComponent implements OnInit {
  professors = professors.slice(3, 6)  ;
  returnedPros;
  constructor() { }

  ngOnInit() {
    this.returnedPros = this.professors.slice(0, 5);
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedPros = this.professors.slice(startItem, endItem);
  }
}
