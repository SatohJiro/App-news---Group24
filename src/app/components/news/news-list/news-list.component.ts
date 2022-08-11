import { Component, OnInit } from '@angular/core';
import {NewsService} from "../news.service";
import {INews} from "../news";
import {log} from "util";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
listNews:any[] = [];
textResponse:string = '';
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.loadNews('tin-moi-nhat.rss').subscribe(response => {
     this.listNews = this.newsService.getNews(response);
    });
  }
}
