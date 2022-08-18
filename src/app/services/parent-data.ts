import {Idata} from "./idata";
import {HomeComponent} from "../components/home/home.component";
import {HomeData} from "./home-data";
import {HttpClient} from "@angular/common/http";
import {Component, Injectable} from "@angular/core";
@Component({
  selector: 'app-parent-data',
  template:'',
  styleUrls: []
})
@Injectable({
  providedIn: 'root'
})
export class ParentData {
  //@ts-ignore
  pageData:Idata;
  //@ts-ignore
  data:any[];
  constructor(private homeData: HomeData,private http: HttpClient) {
  }
  getDataFromHomePage(){
    this.pageData = new HomeData(this.http);
    this.data.push(this.pageData.getData());
    console.log(this.data);
  }
}
