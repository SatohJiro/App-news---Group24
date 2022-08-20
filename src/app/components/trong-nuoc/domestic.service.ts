import { Injectable } from '@angular/core';
import {HomeService} from "../home/home.service";
import {Observable} from "rxjs";
import {INews} from "../news/news";

@Injectable({
  providedIn: 'root'
})
export class DomesticService {
  server = 'https://nld.com.vn';
  option ='tin-moi-nhat.rss';
  corsAnywhere ='https://mycorsproxy01.herokuapp.com';
  constructor(private homeService: HomeService) {

  }
}
