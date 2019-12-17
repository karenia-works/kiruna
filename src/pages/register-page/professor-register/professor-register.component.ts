import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor-register',
  templateUrl: './professor-register.component.html',
  styleUrls: ['./professor-register.component.styl']
})
export class ProfessorRegisterComponent implements OnInit {
  name;
  user_id;
  institution;
  password;
  mail;
  phonenum;

  constructor() { }

  ngOnInit() {
  }

}
