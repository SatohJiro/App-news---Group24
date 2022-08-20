import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ParentData} from "./services/parent-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ParentData]
})
export class AppComponent implements OnInit{
  // title = 'mdb5-angular-ui-kit-pro-advanced';
  dataParent:ParentData=new ParentData();
  // @ts-ignore
  ngOnInit() {
  }
  scrollTop(){

  }
  onActive(){

  }
}
