import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-box-news-detail',
  templateUrl: './box-news-detail.component.html',
  styleUrls: ['./box-news-detail.component.scss']
})
export class BoxNewsDetailComponent implements OnInit {
  url: String = 'https://nld.com.vn/chinh-tri/nguyen-chu-tich-nuoc-truong-tan-sang-nhan-huy-hieu-50-nam-tuoi-dang-20220808143125822.htm'
  constructor() {
  }



  ngOnInit(): void {
  }

}
