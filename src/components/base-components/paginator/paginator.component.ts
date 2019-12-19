import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.styl'],
})
export class PaginatorComponent implements OnInit, OnChanges {
  constructor() {}

  @Input() totalItems: number;
  @Input() itemsPerPage: number;
  @Input() showPageCount: number = 3;
  @Input() showBoundary: boolean;
  @Input() prevText: string = '<';
  @Input() nextText: string = '>';
  @Input() currentItem: number = 0;
  @Output() pageChanged = new EventEmitter<PageChangedEvent>();

  get showedPages(): number[] {
    let cur = this.currentPage;
    let tot = this.totalPages;
    let start = Math.max(cur - this.showPageCount, 1);
    let end = Math.min(tot, cur + this.showPageCount);
    let arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  }

  currentPage: number;
  totalPages: number;
  hasFirst: boolean;
  hasLast: boolean;
  showFirst: boolean;
  showLast: boolean;

  ngOnInit() {}

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    this.currentPage = Math.floor(this.currentItem / this.itemsPerPage) + 1;
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.calculateButtons();
  }

  calculateButtons() {
    this.hasFirst = this.currentPage !== 1;
    this.hasLast = this.currentPage !== this.totalPages;
    this.showFirst =
      this.currentPage === 1 && this.currentPage - this.showPageCount >= 1;
    this.showLast =
      this.currentPage === this.totalPages &&
      this.currentPage + this.showPageCount < this.totalPages;
  }

  emitChanges() {
    this.calculateButtons();
    this.pageChanged.emit({
      itemsPerPage: this.itemsPerPage,
      page: this.currentPage,
    });
  }

  firstPageClick() {
    this.currentPage = 1;
    this.emitChanges();
  }
  lastPageClick() {
    this.currentPage = this.totalPages;
    this.emitChanges();
  }
  prevPageClick() {
    this.currentPage = Math.max(this.currentPage - 1, 1);
    this.emitChanges();
  }
  nextPageClick() {
    this.currentPage = Math.min(this.currentPage + 1, this.totalPages);
    this.emitChanges();
  }
  numberPageClick(n: number) {
    if (this.currentPage != n) {
      this.currentPage = n;
      this.emitChanges();
    }
  }
}

export interface PageChangedEvent {
  itemsPerPage: number;
  page: number;
}
