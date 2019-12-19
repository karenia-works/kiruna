import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {
  PaperQuery,
  PaperQueryParam,
} from 'src/services/data/paper-search.service';
import { Paper } from 'src/models/paper';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.styl'],
})
export class SearchbarComponent implements OnInit {
  constructor() {}

  @Output()
  startQuery = new EventEmitter<PaperQueryParam>();

  @Input()
  params: PaperQueryParam = {
    searchKw: '',
    initialSkip: 0,
    initialTake: 20,
  };

  ngOnInit() {}

  search() {
    this.startQuery.emit(this.params);
  }
}
