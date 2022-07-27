import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.scss']
})
export class HotNewsComponent implements OnInit {
list:number = 12;
dateTime:Date = new Date();
@Input() data:any[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
