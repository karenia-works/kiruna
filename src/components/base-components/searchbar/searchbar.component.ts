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
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

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
    kw: '',
    skip: 0,
    take: 20,
  };

  @Input() canShowAdvancedSearch: boolean = false;
  showAdvancedSearch: boolean = false;

  ngOnInit() {}

  ngOnChanges() {
    if (this.params.author !== undefined)
      this._authors = this.params.author.join(', ');
    else this._authors = '';
    if (this.params.keyword !== undefined)
      this._keywords = this.params.keyword.join(', ');
    else this._keywords = '';
    if (this.params.startTime !== undefined)
      this._startTime = this.params.startTime;
    else this._startTime = undefined;
    if (this.params.endTime !== undefined) this._endTime = this.params.endTime;
    else this._endTime = undefined;
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

  _startTime: Dayjs;
  get startTime() {
    if (this._startTime === undefined) return undefined;
    else return this._startTime.format('YYYY-MM-DD');
  }
  set startTime(val) {
    if (val !== '') this.params.startTime = dayjs(val);
    else this.params.startTime = undefined;
  }

  _endTime: Dayjs;
  get endTime() {
    if (this._endTime === undefined) return undefined;
    else return this._endTime.format('YYYY-MM-DD');
  }
  set endTime(val) {
    if (val !== '') this.params.endTime = dayjs(val);
    else this.params.endTime = undefined;
  }
}
