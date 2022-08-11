import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {INews} from "../news/news";
import {HomeService} from "../home/home.service";
import {switchMap,map} from "rxjs";

@Component({
  selector: 'app-box-news-detail',
  templateUrl: './box-news-detail.component.html',
  styleUrls: ['./box-news-detail.component.scss']
})
export class BoxNewsDetailComponent implements OnInit {
  news: any;

  constructor(private activateRoute: ActivatedRoute, private homeService: HomeService) { }

  ngOnInit(): void {
  }

}
