import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.scss']
})
export class HotNewsComponent implements OnInit {
list:number = 12;
  constructor() { }

  ngOnInit(): void {
  }

}
