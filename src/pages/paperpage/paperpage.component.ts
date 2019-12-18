import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paperpage',
  templateUrl: './paperpage.component.html',
  styleUrls: ['./paperpage.component.styl']
})
export class PaperpageComponent implements OnInit {

  articles;
  returnedArray;

  journalType;
  journalName;
  journalYear;
  journalVolume;

  authors;
  organizations;
  doi;

  tags;

  abstract;

  title;
  college;
  downloadNum;
  MoneyLeft;

  constructor() { }

  ngOnInit() {
    this.journalType = '期刊';
    this.journalName = '中国现代应用药学';
    this.journalYear = '2019';
    this.journalVolume = '17';
    this.title = '紫杉醇脂质体雾化吸入对大鼠肺纤维化的作用研究';
    this.authors = '周颖, 陈明柴, 秀娟, 陈嘉斌, 余志红';
    this.organizations = '浙江省立同德医院呼吸科, 浙江省立同德医院肿瘤科';
    this.doi = '10.13748/j.cnki.issn1007-7693.2019.17.007';
    this.abstract = '目的\n' +
      '观察紫杉醇脂质体雾化吸入对博来霉素诱导大鼠肺纤维化的干预作用，并进一步探讨其可能的作用机制。\n' +
      '方法\n' +
      '将雄性SD大鼠随机分为4组：健康对照组、肺纤维化模型组、紫杉醇脂质体雾化组、紫杉醇脂质体静脉组。除健康对照组外，其他3组均用单次气管内注入博来霉素的方法复制大鼠肺纤维化模型，紫杉醇脂质体雾化组隔日雾化吸入紫杉醇脂质体，紫杉醇脂质体静脉组尾静脉注射紫杉醇脂质体，其余组隔日雾化吸入等量生理盐水，观测大鼠一般情况和肺组织病理变化，行肺纤维化Ashcroft评分及肺泡间隔厚度测定，免疫组化染色方法检测肺组织中Ⅰ、Ⅲ型胶原及TGF-β1的表达。结果 与模型组相比，紫杉醇脂质体雾化组肺纤维化Ashcroft评分明显降低(P<0.01)，肺泡间隔厚度明显变薄(P<0.01)，Ⅰ、Ⅲ型胶原及TGF-β1表达水平均显著降低(P<0.01)。结论 紫杉醇脂质体雾化吸入对博来霉素诱导大鼠肺纤维化具有明显的保护作用，能够降低其肺泡炎、肺泡破坏程度及纤维化程度，从而降低其死亡率，并且其保护作用可能与抑制Ⅰ、Ⅲ型胶原及TGF-β1细胞因子的表达水平有关。 ';

    this.college = '北京航空航天大学';
    this.downloadNum = '12';
    this.MoneyLeft = '14.33';
  }

}
