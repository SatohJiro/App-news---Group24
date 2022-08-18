import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ParentData} from "./services/parent-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  //@ts-ignore;
  title = 'mdb5-angular-ui-kit-pro-advanced';
  //@ts-ignore
  data:any[];
  contentLoaded:boolean=false;
  constructor(private parentData: ParentData) {

  }
  ngOnInit() {
    this.data = this.parentData.data;
  }
  scrollTop(){
   window.scrollTo(0,0);
  }
  onActive(){
    window.scroll(0,0);
  }
}
