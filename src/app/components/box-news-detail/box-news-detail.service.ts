import { Injectable } from '@angular/core';
import * as cheerio from "cheerio";
import {delay, Observable, of, throwError} from "rxjs";
import {INews} from "../news/news";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BoxNewsDetailService {
  server = 'https://nld.com.vn/phap-luat/ky-luat-dang-uy-2-benh-vien-o-tp-hcm-va-mot-so-can-bo-lien-quan-vu-viet-a-20220817141133865.htm';
  option = 'tin-moi-nhat.rss';
  corsAnywhere = 'https://mycorsproxy01.herokuapp.com';
  private listHomeNews: INews[] = []

  constructor(private http: HttpClient) { }

  getMostViewed(): any[] {
    const ajax = new XMLHttpRequest();
    let data: any[] = [];
    // ajax.timeout = 3000;
    const url = `${this.corsAnywhere}/${this.server}`;
    const asyns = true;
    const method = "GET";
    ajax.open(method, url, asyns);
    ajax.send();
    // @ts-ignore
    ajax.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const $ = cheerio.load(this.responseText);
        $('.boxxemnhieu ul li').each((i, item) => {
          // @ts-ignore
          data.push({
            id: i,
            title: $(item).find('a').attr('title'),
            link: $(item).find('a').attr('href'),
            urlImg: $(item).find('a > img').attr('src')
          });
        })
        console.log(data);
      }
    }
    return data;
  }


}
