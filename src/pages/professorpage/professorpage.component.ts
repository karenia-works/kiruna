import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-mainpage',
  templateUrl: './professorpage.component.html',
  styleUrls: ['./professorpage.component.styl'],
  animations: [
    trigger('banner-trigger', [
      transition(':enter', [
        style({
          height: '0vh',
        }),
        animate(
          '200ms cubic-bezier(0.0, 0.0, 0.2, 1)',
          style({ height: '60vh' })
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
          style({ height: '0vh' })
        ),
      ]),
    ]),
  ],
})
export class ProfessorpageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
