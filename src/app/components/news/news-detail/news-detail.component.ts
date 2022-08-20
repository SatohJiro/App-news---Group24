
import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})

export class NewsDetailComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() detailLoading: boolean = true;


  constructor() {
  }

  ngOnInit(): void {
    if (this.detailLoading) {
      setTimeout(() => {
        this.detailLoading = false;
      }, 4000);
    }
  }

}
