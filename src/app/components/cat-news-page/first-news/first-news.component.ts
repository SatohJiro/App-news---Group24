import { Component, OnInit } from '@angular/core';
import {CatNewsPageService} from "../cat-news-page.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-first-news',
  templateUrl: './first-news.component.html',
  styleUrls: ['./first-news.component.scss']
})
export class FirstNewsComponent implements OnInit {
  url:string="";
  data:any;
  isLoading:boolean=true;
  constructor(private catNewsPageService: CatNewsPageService,private activatenRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getUrl();
    this.data=this.catNewsPageService.getFirstNews(this.url);
    if (this.isLoading) {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    }

  }
  getUrl() {
    this.activatenRoute.paramMap.subscribe(paramMap => {
      this.url= String(paramMap.get('RSS')+'.htm');
    })
  }
}
