import { Component, OnInit, Input } from '@angular/core';
import {ServerService} from "../../services/server.service";
import {HomeService} from "../home/home.service";
import {INews} from "../news/news";

@Component({
  selector: 'app-news-row',
  templateUrl: './news-row.component.html',
  styleUrls: ['./news-row.component.scss']
})
export class NewsRowComponent implements OnInit {
  @Input() news:INews = {};
  // @ts-ignore
  listSubNews:any[];
  constructor(private service: ServerService, private homeService: HomeService) { }

  ngOnInit(): void {
    this.listSubNews = this.homeService.getListSubNews();
  }

}
