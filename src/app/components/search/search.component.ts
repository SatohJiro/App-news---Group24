import {Component, OnInit} from '@angular/core';
import {SearchService} from "./search.service";
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // public listResult: any[] = [];

  listResult$ =this.activateRoute.queryParamMap.pipe(
    //@ts-ignore
    switchMap(query=> this.searchService.getListResult(query.get('keywords'))));

  constructor(private searchService: SearchService, private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

  }

}
