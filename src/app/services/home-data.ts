import {Idata} from "./idata";
import {HomeService} from "../components/home/home.service";
import {OnInit, Component, Injectable} from "@angular/core";
import {INews} from "../components/news/news";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {delay, Observable, of} from "rxjs";
import * as cheerio from "cheerio";
@Component({
  selector: 'app-home-data',
  template:'',
  styleUrls: []
})
@Injectable({
  providedIn: 'root'
})
export class HomeData implements  Idata, OnInit{
  //@ts-ignore
  data: any[] ;
  //@ts-ignore
  url: string ;
  private server = 'https://nld.com.vn';
  private corsAnywhere ='https://mycorsproxy01.herokuapp.com';
  private textData:string = '';
  listVipNews:INews[] = [];
  listNews:INews[] = [];
  headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Accept':'text/xml',
      'Content-Type': 'text/xml',
    }
  )
  constructor(private http: HttpClient) { }
export class HomeData implements  Idata{
  data: [] =[];
  url: string ='';
  getData(): void {
// @ts-ignore
    this.data.push([{
      // @ts-ignore
      abc:1,
    }]);

  }


}
