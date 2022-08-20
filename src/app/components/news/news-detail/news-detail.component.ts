
import {Component, Inject, INJECTOR, Input, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";


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


  constructor(@Inject(DOCUMENT) document: Document) {
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
  playAudio(src:string) {
    // const audio = new Audio(src);
    const audio = document.createElement('audio');
    audio.setAttribute('src',src);
    audio.controls = true;
    // @ts-ignore
    document.querySelector('.audio').insertBefore(audio,document.querySelector('.audio').children[0]);
    // @ts-ignore
    document.querySelector('.audio__btn').classList.add('d-none');
    audio.play();
  }

}
