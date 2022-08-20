
import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})

export class NewsDetailComponent implements OnInit {
  @Input() url:string="";
  @Input() data: any[] = [];
  @Input() detailLoading: boolean = true;
  liked:boolean=false;
  likeText:string="";


  constructor() {
  }
like(){
    this.liked=!this.liked;
    if (this.liked){
      this.likeText="Đã Thích"
    }else{
      this.likeText="";
    }
}
  ngOnInit(): void {
    if (this.detailLoading) {
      setTimeout(() => {
        this.detailLoading = false;
      }, 4000);
    }
  }

}
