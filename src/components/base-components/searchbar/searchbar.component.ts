import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.styl']
})
export class SearchbarComponent implements OnInit {
  @Input() type: string = '文献';
  constructor() {}
  ngOnInit() {
  }

}
