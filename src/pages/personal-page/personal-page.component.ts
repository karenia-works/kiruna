import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.styl']
})
export class PersonalPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class PersonalPageInfo {
  title = 'Tour of Heroes';
  myHero = 'Windstorm';
}