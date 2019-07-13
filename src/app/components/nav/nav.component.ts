import { Component, OnInit } from '@angular/core'
import { animate, style, trigger, state, transition } from '@angular/animations'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less'],
  animations: [
    trigger('toggle', [
      state(
        'hidden',
        style({
          opacity: 0.0,
          transform: 'translateY(-140%)',
        })
      ),
      state(
        'visible',
        style({
          opacity: 1.0,
          transform: 'translateY(0)',
        })
      ),
      transition('* <=> *', animate('.5s ease')),
    ]),
  ],
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  toggleNav() {
    this.visibility = this.visibility == 'hidden' ? 'visible' : 'hidden'
  }

  visibility = 'hidden'
}
