import { Component, OnInit } from '@angular/core';
import {HomeService} from "../home.service";

@Component({
  selector: 'app-box-home-ngang',
  templateUrl: './box-home-ngang.component.html',
  styleUrls: ['./box-home-ngang.component.scss']
})
export class BoxHomeNgangComponent implements OnInit {
  //@ts-ignore
dataSub:any[];
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.dataSub = this.homeService.getListSubContent();
    console.log(this.dataSub);
  }

}
