import { Injectable } from '@angular/core';
import * as cheerio from "cheerio";
import {delay, Observable, of} from "rxjs";
import {INews} from "../news/news";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  server = 'https://nld.com.vn';
  option = 'tin-moi-nhat.rss';
  corsAnywhere = 'https://mycorsproxy01.herokuapp.com';
  private listHomeNews: INews[] = []
  private text: string = '';

  constructor(private http: HttpClient) {

  }
  getListResult(keyword:string):Observable<INews[]>{
    // const keywords = encodeURI(keyword);
    let keywords = encodeURI(`site:${this.server} ${keyword}`);
    const url = `${this.corsAnywhere}/https://www.google.com.vn/search?q=${keywords}`;
    const ajax = new XMLHttpRequest();
    const asyns = true;
    const method = "GET";
    ajax.open(method, url, asyns);
    ajax.send();
    let data: any[] = [];
    ajax.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const $ = cheerio.load(this.responseText);
        $('#search .v7W49e .MjjYud').each((i, news)=> {
          // @ts-ignore
          data.push({
            id: i + '',
            link: $(news).find('a').attr('href'),
            title: $(news).find('h3').text(),
            cite: $(news).find('.NJjxre').text(),
            description: {
              text:$(news).find('.VwiC3b').text()
            }
          })
          console.log(data)
        })
      }
    }
    return of(data).pipe(delay(50));
  }
}
