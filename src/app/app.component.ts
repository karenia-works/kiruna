import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  group,
  animateChild,
} from '@angular/animations';
import { RouterOutlet } from '@angular/router';

export function nonVoidTransition(from: string, to: string) {
  return from !== 'void' && to !== 'void';
}

const routeAnimations = trigger('routerAnimations', [
  transition(nonVoidTransition, [
    group([
      query(
        ':enter',
        [
          // style({ opacity: '0' }),
          // animate(
          //   '200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
          //   style({ opacity: '1' })
          // ),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          // animate(
          //   '200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
          //   style({ opacity: '0' })
          // ),
        ],
        { optional: true }
      ),
      query(':enter', animateChild(), { optional: true }),
      query(':leave', animateChild(), { optional: true }),
    ]),
  ]),
  transition(':enter', [
    group([
      query(
        ':enter',
        [
          // style({ opacity: '0' }),
          // animate(
          //   '200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
          //   style({ opacity: '1' })
          // ),
        ],
        { optional: true }
      ),
      query(':enter', animateChild(), { optional: true }),
    ]),
  ]),
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  animations: [routeAnimations],
})
export class AppComponent {
  title = 'kiruna';
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
