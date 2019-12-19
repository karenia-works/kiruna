import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import {
  PaperQueryParam,
  paperQueryParamToWebQuery,
} from 'src/services/data/paper-search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.styl'],
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
export class MainpageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  startQuery(query: PaperQueryParam) {
    console.log('Searched', query);
    this.router.navigate(['s'], {
      queryParams: paperQueryParamToWebQuery(query),
    });
  }
}
