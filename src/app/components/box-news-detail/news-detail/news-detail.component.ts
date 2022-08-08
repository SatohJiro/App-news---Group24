import {Component, Inject, Input, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {ServerService} from "../../../services/server.service";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  @Input() url: String = '';
  datas: any[] = [];

  constructor(@Inject(DOCUMENT) document: Document, private serverService: ServerService) {
  }

  ngOnInit(): void {
    this.datas = this.serverService.getDataDetail(this.url);
  }

}
