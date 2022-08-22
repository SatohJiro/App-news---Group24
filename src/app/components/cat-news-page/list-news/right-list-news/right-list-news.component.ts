import { Component, OnInit } from '@angular/core';
import {CatNewsPageService} from "../../cat-news-page.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-right-list-news',
  templateUrl: './right-list-news.component.html',
  styleUrls: ['./right-list-news.component.scss']
})
export class RightListNewsComponent implements OnInit {

  url:string="";
  dataNoiBat:any;
  dataXemNhieu:any;
  constructor(private catNewsPageService: CatNewsPageService,private activatenRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getUrl();
    this.dataNoiBat=this.catNewsPageService.getRightListNews_TinNoiBat(this.url);
    this.dataXemNhieu=this.catNewsPageService.getRightListNews_XemNhieuNhat(this.url);
  }
  getUrl() {
    this.activatenRoute.paramMap.subscribe(paramMap => {
      this.url= String(paramMap.get('RSS')+'.htm');
    })
  }

}
