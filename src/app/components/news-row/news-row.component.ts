import { Component, OnInit, Input } from '@angular/core';
import {ServerService} from "../../services/server.service";

@Component({
  selector: 'app-news-row',
  templateUrl: './news-row.component.html',
  styleUrls: ['./news-row.component.scss']
})
export class NewsRowComponent implements OnInit {
  // @ts-ignore
  @Input() listData:string[] = [];
  constructor(private service: ServerService) { }

  ngOnInit(): void {
    console.log(this.listData);
  }

}
