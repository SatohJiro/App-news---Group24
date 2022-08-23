import {Component, OnInit} from '@angular/core';
import {CatNewsPageService} from "./cat-news-page.service";
import {ActivatedRoute} from "@angular/router";
import {of, switchMap} from "rxjs";


@Component({
  selector: 'app-cat-news-page',
  templateUrl: './cat-news-page.component.html',
  styleUrls: ['./cat-news-page.component.scss']
})
export class CatNewsPageComponent implements OnInit {

  public subCateList$ = this.cateNewsPageService.subCateList$;
  public focusNews$ = this.cateNewsPageService.focusNews$;
  public listNews$ = this.cateNewsPageService.listNews$;
  public listNoiBatNews$ = this.cateNewsPageService.listNoiBatNews$;
  public listXemNhieuNhatNews$ = this.cateNewsPageService.listXemNhieuNhatNews$;
  constructor(private cateNewsPageService: CatNewsPageService,private route: ActivatedRoute) {
  }
showParam() {
  this.route.paramMap.subscribe(paramMap => console.log(paramMap.get("RSS")));
}

  ngOnInit(): void {
    this.showParam();
  }

}
