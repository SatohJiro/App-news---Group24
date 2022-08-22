import {Component, OnInit} from '@angular/core';
import {DomesticService} from "./domestic.service";
import {HomeService} from "../home/home.service";

@Component({
  selector: 'app-trong-nuoc',
  templateUrl: './trong-nuoc.component.html',
  styleUrls: ['./trong-nuoc.component.scss']
})
export class TrongNuocComponent implements OnInit {

  constructor(private domesticService: DomesticService, private homeService: HomeService) {
  }

  dataDomestic: any = {};

  ngOnInit(): void {
  }

}
