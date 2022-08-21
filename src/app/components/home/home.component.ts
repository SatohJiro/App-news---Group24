import {Component, OnInit, Input, OnDestroy, AfterViewInit} from '@angular/core';
import {ServerService} from "../../services/server.service";
import {HomeService} from "./home.service";
import {INews} from "../news/news";
import {CatNewsPageService} from "../cat-news-page/cat-news-page.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  isLoading: boolean = true;
  isLoadingTop: boolean = true;
  // @ts-ignore
  dateTime: Date = new Date();
  dataHome: any = {};

  constructor(private homeService: HomeService, private serverService: ServerService) {
  }

  ngOnInit(): void {
    // this.data = this.homeService.getData('tin-moi-nhat.rss');
    this.homeService.getHotNewsTags().subscribe(data => this.dataHome.tags = data);
    this.homeService.getListHotNews().subscribe(data => this.dataHome.listHotNews = data);
    this.homeService.getListNews('tin-moi-nhat.rss').subscribe(data => this.dataHome.listNews = data);
    this.homeService.getListNewsRow().subscribe(data => this.dataHome.listNewsRow = data);
    this.homeService.getBoxNewsList().subscribe(data => this.dataHome.boxNewsList1 = data);
    this.homeService.getNewsNoiThang().subscribe(data => this.dataHome.noithang = data);
    this.homeService.getNewsDocQuyen().subscribe(data => this.dataHome.docquyen = data);
    this.homeService.getHoiNongDapNhanh().subscribe(data => this.dataHome.hoinongdapnhanh = data);
    this.homeService.getTruyVetMangXaHoi().subscribe(data => this.dataHome.truyvetmangxahoi = data);
    this.homeService.getGocNhin().subscribe(data => this.dataHome.gocnhin = data);
    this.homeService.getBoxMostViewed().subscribe(data => this.dataHome.xemnhieu = data);

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    setTimeout(() => {
      this.isLoadingTop = false;
    }, 3000);
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {

  }
}
