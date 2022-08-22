import {Injectable} from '@angular/core';
import * as cheerio from "cheerio";
import {BehaviorSubject, delay, Observable, of, shareReplay, switchMap} from "rxjs";
import {INews} from "../news/news";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  server = 'https://nld.com.vn';
  option = 'tin-moi-nhat.rss';
  corsAnywhere = 'https://mycorsproxy01.herokuapp.com';
  tool = 'https://www.google.com.vn/search?q=';
  private listHomeNews: INews[] = []
  private text: string = '';
  private _listResult$ = new BehaviorSubject<void>(undefined);

  constructor(private http: HttpClient,private activateRoute: ActivatedRoute) {

  }

  getListResult(keyword: string) {
    const url = `${this.corsAnywhere}/${this.tool}` + encodeURI(`site:${this.server} ${keyword}`);
    const data: any[] = []
    // @ts-ignore
    const loadResult = (text: string) => {
      const $ = cheerio.load(text);
      $('#search .v7W49e .MjjYud').each((i, news) => {
        // @ts-ignore
        data.push({
          id: i + '',
          link: $(news).find('a').attr('href'),
          title: $(news).find('h3').text(),
          cite: $(news).find('.NJjxre').text(),
          time: new Date().toISOString(),
          description: {
            text: $(news).find('.VwiC3b').text()
          }
        })
      })
      return of(data).pipe(delay(50), shareReplay(1));
    }

    //@ts-ignore
    return this.http.get<any[]>(url, {responseType: 'text'}).pipe(switchMap(text => loadResult(text)))
  }
  public updateData() {
    this._listResult$.next();
  }


}
