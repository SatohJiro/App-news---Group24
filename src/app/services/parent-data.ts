import {Idata} from "./idata";

import {DetailData} from "./detail-data";
import {HomeData} from "./home-data";

import { Injectable } from '@angular/core';

@Injectable()
export class ParentData {
  data: any[] = [];
  pageData: Idata = new HomeData();

  constructor() {
    this.loadDataHome();
  }
  loadDataHome(): void {
    const homePage: HomeData = new HomeData();
    homePage.getData();
    this.data.push([{
      homeData: homePage,
    }])
  };

  getHomeData() {
    return this.data[0].homeData;
  }


  loadDataDetailPage(url: string): DetailData {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].url === url) {
        return this.data[i];
      }
    }
    const newPage: DetailData = new DetailData(url);
    this.data.push(newPage);
    return newPage;
  }
  checkExitsURL(url: string): boolean{
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].url === url) {
        return true;
      }
    }
    return false;
  }
}
