import {Component, OnInit} from '@angular/core';
import {HomeService} from "../home/home.service";

@Component({
  selector: 'app-box-news-detail',
  templateUrl: './box-news-detail.component.html',
  styleUrls: ['./box-news-detail.component.scss']
})
export class BoxNewsDetailComponent implements OnInit {
  url: String = 'https://nld.com.vn/chinh-tri/nguyen-chu-tich-nuoc-truong-tan-sang-nhan-huy-hieu-50-nam-tuoi-dang-20220808143125822.htm'
  constructor(private homeService: HomeService) {

  }
  data:any = {};
  newsMain:any = {}
  listNews:any[] = []

  ngOnInit(): void {
     this.newsMain = this.data.newsMain;
     this.listNews = this.data.listNews;
  }

}
