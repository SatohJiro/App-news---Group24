import {Component, OnInit} from '@angular/core';

import {SearchService} from "./search.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public listResult: any[] =[];
  constructor(private searchService: SearchService, private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activateRoute.queryParamMap.subscribe((query)=> {
      const {getListResult} = this.searchService;
      //@ts-ignore
      this.searchService.getListResult(query.get('keywords')).subscribe(data => this.listResult = data);
    })
    // this.activateRoute.queryParamMap.pipe(map((querys)=> querys.get('keywords')),
    //   // @ts-ignore
    // switchMap((keywords)=> console.log(keywords)))
    //   // switchMap((keywords)=> this.searchService.getListResult(keywords).subscribe(data => this.listResult = data)))
  }
}
