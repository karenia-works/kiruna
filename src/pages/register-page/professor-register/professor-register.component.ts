import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor-register',
  templateUrl: './professor-register.component.html',
  styleUrls: ['./professor-register.component.styl'],
})
export class ProfessorRegisterComponent implements OnInit {
  name;
  user_id;
  institution;
  password;
  mail;
  phonenum;
  field;

  constructor() {}

  ngOnInit() {}
  onClickMe() {
    alert(
      'your ID:' +
        this.user_id +
        '\nyour name:' +
        this.name +
        '\nyour institution:' +
        this.institution +
        '\nyour field:' +
        this.field +
        '\nyour email:' +
        this.mail +
        '\nyour phone number:' +
        this.phonenum
    );
  }
}
