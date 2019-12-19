import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
} from '@angular/core';
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
export class SearchbarComponent implements OnInit, OnChanges {
  constructor() {}

  @Output()
  startQuery = new EventEmitter<PaperQueryParam>();

  @Input()
  params: PaperQueryParam = {
    searchKw: '',
    initialSkip: 0,
    initialTake: 20,
  };

  @Input() canShowAdvancedSearch: boolean = false;
  showAdvancedSearch: boolean = true;

  ngOnInit() {}

  ngOnChanges() {
    if (this.params.author !== undefined)
      this._authors = this.params.author.join(', ');
    else this._authors = '';
    if (this.params.keyword !== undefined)
      this._keywords = this.params.keyword.join(', ');
    else this._keywords = '';
  }

  search() {
    this.startQuery.emit(this.params);
  }

  _authors: string;
  get authors() {
    return this._authors;
  }
  set authors(val) {
    this._authors;
    if (/\s+/.test(val)) this.params.author = undefined;
    else this.params.author = val.split(/[,，] ?/);
  }

  _keywords: string;
  get keywords() {
    return this._keywords;
  }
  set keywords(val) {
    if (/\s+/.test(val)) this.params.keyword = undefined;
    else this.params.keyword = val.split(/[,，] ?/);
  }
}
