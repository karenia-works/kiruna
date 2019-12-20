import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pro-abstract',
  templateUrl: './pro-abstract.component.html',
  styleUrls: ['./pro-abstract.component.styl']
})
export class ProAbstractComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() photoURL: string;
  @Input() unit?: string;
  @Input() description?: string;
  @Input() tags?: string[];

  @Input() articleCount?: number;
  @Input() citationsCount?: number;
  @Input() downloadCount?: number;
  @Input() showFavorite: boolean;
  @Input() hasBtn: boolean = false;
  @Input() btn1Name: string = '修改';
  @Input() btn2Name: string = '删除';

  @Input() linked: boolean = true;
  deleted: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {this.id = 1}
  get proInfo(): string {

    return [this.unit, '发文：'.concat(this.articleCount.toString()),
      '被引：'.concat(this.citationsCount.toString()),
      '下载：'.concat(this.downloadCount.toString())]
      .filter(val => val !== undefined)
      .join(' | ');
  }
  jump() {
    if (this.linked && this.id) {
      this.router.navigateByUrl('/prof/'+ this.id);
    }
  }
  clickBtn1() {
    // 1
  }
  clickBtn2() {
    alert(this.btn2Name);
    //
  }
}
