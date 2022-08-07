import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {ServerService} from "../../../services/server.service";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  datas:any[] = [];
  constructor(@Inject(DOCUMENT) document: Document, private serverService: ServerService) {
  }

  ngOnInit(): void {
    this.datas = this.serverService.getDataDetail('https://nld.com.vn/kinh-te/gia-vang-hom-nay-7-8-bien-dong-manh-kho-doan-2022080709055833.htm');
  }

}
