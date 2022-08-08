import {Component, Inject, Input, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {ServerService} from "../../services/server.service";

@Component({
  selector: 'app-news-row',
  templateUrl: './news-row.component.html',
  styleUrls: ['./news-row.component.scss']
})
export class NewsRowComponent implements OnInit {
  @Input() url: String = '';
  datas: any[] = [];

  constructor(@Inject(DOCUMENT) document: Document, private serverService: ServerService) {
  }

  ngOnInit(): void {
    this.datas = this.serverService.getDataRelatedDetail(this.url);
  }

}
