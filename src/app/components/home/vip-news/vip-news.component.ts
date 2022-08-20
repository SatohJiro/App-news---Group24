import { Component, OnInit } from '@angular/core';
import {HomeService} from "../home.service";
import {INews} from "../../news/news";

@Component({
  selector: 'app-vip-news',
  templateUrl: './vip-news.component.html',
  styleUrls: ['./vip-news.component.scss']
})
export class VipNewsComponent implements OnInit {
  //@ts-ignore
  listVipNews: INews[] = [];
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
     this.homeService.getListVipNews().subscribe(data => this.listVipNews = data);
  }

}
