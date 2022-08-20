
import {Component, Inject, INJECTOR, Input, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";


@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})

export class NewsDetailComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() detailLoading: boolean = true;


  constructor(@Inject(DOCUMENT) document: Document) {
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
