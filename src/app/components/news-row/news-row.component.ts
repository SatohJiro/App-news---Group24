import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-row',
  templateUrl: './news-row.component.html',
  styleUrls: ['./news-row.component.scss']
})
export class NewsRowComponent implements OnInit {
  // @ts-ignore
  @Input() data: any[] = [];
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
