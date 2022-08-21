import {DetailData} from "./detail-data";


import {Injectable} from '@angular/core';

@Injectable()
export class ParentData {
  data: any[] = [];


  constructor() {
  }


  addCommentByUrl(url: string, comment:{}) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].url === url) {
        this.data[i].comments.push(comment);
      }
    }
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

  checkExitsURL(url: string): boolean {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].url === url) {
        return true;
      }
    }
    return false;
  }
}
