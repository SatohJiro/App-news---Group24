import {Component, OnDestroy, OnInit} from '@angular/core';
import {ServerService} from "../../../services/server.service";
import {ActivatedRoute} from "@angular/router";
import {switchMap,map} from "rxjs";
import {INews} from "../news";
import {NewsService} from "../news.service";
import {HomeService} from "../../home/home.service";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit,OnDestroy {
   // @ts-ignore
    news: INews;
  // @ts-ignore
  vipNews:INews;

  constructor(private service: NewsService, private homeService: HomeService,private activatenRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("init");
    this.findNewsById();
  }
  ngOnDestroy() {
    console.log("destroy");
  }

  findNewsById(){
    console.log(this.activatenRoute);
    this.activatenRoute.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.service.findNewsById(id))
    ).subscribe(news => this.news = news);
  }
}
