import {Component, Input, OnInit} from '@angular/core';
import {CatNewsPageService} from "../../../cat-news-page.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-category-item-news',
  templateUrl: './category-item-news.component.html',
  styleUrls: ['./category-item-news.component.scss']
})
export class CategoryItemNewsComponent implements OnInit {
  @Input()isNoiBat:boolean=true;
  title:string="";
  @Input() data:any;
  isLoading:boolean=true;
  constructor() { }

  ngOnInit(): void {
    if(this.isNoiBat){
      this.title="TIN NỔI BẬT"
    }
    else{
      this.title="XEM NHIỀU"
    }
    if (this.isLoading) {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    }

  }


}
