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

getMainNews(){
  const url = `${this.corsAnywhere}/${this.server}`;
  const data:[] = [];
  //@ts-ignore
   this.http.get<any>(url, {responseType: 'text'}).subscribe(data => this.data = data);
   return this.data;
}
getListHotNews(){

}
getListNews(){

}
getSubMainNews(){

}
getListVipNews(){

}
getListNewsWithCate(){

}
  getData(): any[] {
    this.data.push([
      {
        mainNews: this.getMainNews(),
        listHotNews:this.getListHotNews(),
        listNews:this.getListNews(),
        listSubMainNews:this.getSubMainNews(),
        listVipNews:this.getListVipNews(),
        listNewsWithCate:this.getListNewsWithCate(),
      }
    ])
    console.log(this.data);
    return this.data;
  }

  ngOnInit(): void {
  }


}
