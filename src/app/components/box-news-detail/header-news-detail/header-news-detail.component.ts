import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-header-news-detail',
  templateUrl: './header-news-detail.component.html',
  styleUrls: ['./header-news-detail.component.scss']
})
export class HeaderNewsDetailComponent implements OnInit {

  @Input() data: any[] = [];
  @Input() headerLoading: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
    if (this.headerLoading) {
      setTimeout(() => {
        this.headerLoading = false;
      }, 2000);
    }
  }

}
