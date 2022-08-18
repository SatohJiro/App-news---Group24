import { Component, OnInit, Input } from '@angular/core';
import {ServerService} from "../../../services/server.service";
import {HomeService} from "../home.service";

@Component({
  selector: 'app-hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.scss']
})
export class HotNewsComponent implements OnInit {
  isLoading:boolean =true;
  isLoadingTop:boolean =true;
  list:number = 12;
  dateTime:Date = new Date();
  hotNewsTags:any[] =  [];
  hotNewsData: any[] = [];
  @Input() data:any[] = [];
  //@ts-ignore

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    // this.hotNewsTags = this.homeService.getHotNewsTags();
    // this.hotNewsData = this.homeService.getHotNewsData();


  }


}
