import {Component, Inject, Input, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {ServerService} from "../../../services/server.service";

@Component({
  selector: 'app-header-news-detail',
  templateUrl: './header-news-detail.component.html',
  styleUrls: ['./header-news-detail.component.scss']
})
export class HeaderNewsDetailComponent implements OnInit {
  @Input() url:String = '';
  items: any[] = [];

  constructor(@Inject(DOCUMENT) document: Document, private serverService: ServerService) {
  }

  ngOnInit(): void {
    this.items = this.serverService.getDataHeaderDetail(this.url);
  }

}
