import { Component, OnInit } from '@angular/core';
import {follows} from '../../../followList';
import { PageChangedEvent } from '../../../components/base-components/paginator/paginator.component';
@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.styl']
})
export class UserManageComponent implements OnInit {
  users = follows;
  returnedUsers;

  ngOnInit(): void {
    this.returnedUsers = this.users.slice(0, 5);
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedUsers = this.users.slice(startItem, endItem);
  }
}
