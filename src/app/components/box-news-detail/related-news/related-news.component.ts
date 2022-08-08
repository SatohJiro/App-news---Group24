import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-related-news',
  templateUrl: './related-news.component.html',
  styleUrls: ['./related-news.component.scss']
})
export class RelatedNewsComponent implements OnInit {
  @Input() url: String = '';
  constructor() { }

  ngOnInit(): void {
  }

}
