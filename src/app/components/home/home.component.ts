import { Component, OnInit, Input } from '@angular/core';
import {ServerService} from "../../services/server.service";
import {HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // @ts-ignore
  data:any[];
  newsRow: string[] = [];
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.data = this.homeService.getData('tin-moi-nhat.rss');
  }
}
