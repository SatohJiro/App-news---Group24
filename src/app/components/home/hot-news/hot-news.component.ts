import {Component, Input, OnInit} from '@angular/core';
import {HomeService} from "../home.service";

@Component({
  selector: 'app-hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.scss']
})
export class HotNewsComponent implements OnInit {
  isLoading: boolean = true;
  isLoadingTop: boolean = true;
  list: number = 12;
  dateTime: Date = new Date();
  hotNewsTags: any[] = [];
  hotNewsData: any[] = [];
  @Input() data: any[] = [];

  //@ts-ignore

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    console.log(this.isLoading)
    setTimeout(() => {
      this.isLoadingTop = false;
    }, 3000);
    console.log(this.isLoading)
  }


}
