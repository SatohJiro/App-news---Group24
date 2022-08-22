import { Component, OnInit } from '@angular/core';
import {CatNewsPageService} from "../../cat-news-page.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-left-list-news',
  templateUrl: './left-list-news.component.html',
  styleUrls: ['./left-list-news.component.scss']
})
export class LeftListNewsComponent implements OnInit {
data:any[]=[];
linkRSS:string="";
  constructor(private listNewsLeft: CatNewsPageService,private activatenRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getLinkRSS();
    this.data=this.listNewsLeft.getData(this.linkRSS);
  }
  getLinkRSS() {
    this.activatenRoute.paramMap.subscribe(paramMap => {
      this.linkRSS = String(paramMap.get('RSS'));
    })
  }
}
