import { Component, OnInit } from '@angular/core';
import {ServerService} from "../../../../services/server.service";

@Component({
  selector: 'app-box-news',
  templateUrl: './box-news.component.html',
  styleUrls: ['./box-news.component.scss']
})
export class BoxNewsComponent implements OnInit {

  constructor(private service: ServerService) {
  }

  data: any[] = [];

  ngOnInit(): void {
    // this.data = this.service.getBoxNews();}

  }
}
