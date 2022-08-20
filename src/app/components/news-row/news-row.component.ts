import {Component, Input, OnInit} from '@angular/core';
import {INews} from "../news/news";
@Component({
  selector: 'app-news-row',
  templateUrl: './news-row.component.html',
  styleUrls: ['./news-row.component.scss']
})
export class NewsRowComponent implements OnInit {
  @Input() news:INews = {};
  // @ts-ignore
  @Input() data: any[] = [];
  @Input() isHome: boolean = true;
  constructor() {
  }
  ngOnInit(): void {
    // @ts-ignore
    if (this.data.length === 0) {
      setTimeout(() => {
        this.ngOnInit();
      }, 1000);
    }
  }

}
