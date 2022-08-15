import { Injectable } from '@angular/core';
import {INews} from "./news";
import {of,delay,Observable,throwError,map, catchError} from "rxjs";
import * as cheerio from "cheerio";


import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private server = 'https://nld.com.vn';
  private corsAnywhere ='https://mycorsproxy01.herokuapp.com';
  private option:string = '';
  private textData:string = '';
  listVipNews:INews[] = [];
  listNews:INews[] = [];
    headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Accept':'text/xml',
      'Content-Type': 'text/xml',
  }
    )
  constructor(private http: HttpClient) { }
    getNews(response:string) {
      //@ts-ignore
      const $ =  cheerio.load(response,{xmlMode: true});
      // @ts-ignore
      const getImg= (text:string) =>{
        const $ = cheerio.load(text, {xmlMode: true});
        return $('img');
      }
      $('item').each((i,item)=>  {
        const id = i+'';
        const title =  $(item).find('title').text().trim();
        const link = $(item).find('link').text().trim();
        const guid = $(item).find('guid').text().trim();
        const url = getImg($(item).find('description').text().trim()).attr("src");
        const alt = getImg($(item).find('description').text().trim()).attr("alt");
        const text =$(item).find('description').text().slice($(item).find('description').text().lastIndexOf(">")+1).trim();
        const description = {
          url: url,
          alt: alt,
          text: text
        }
        const pubDate = $(item).find('pubDate').text().trim();
        const news: INews  = {
          id,
          title,
          link,
          guid,
          description,
          pubDate
        }
        this.listNews.push(news)
      })
      return this.listNews;
    }
   loadNews(option:string):Observable<string> {
     this.option = option;
     const listNews: INews[] = [];
     const url = `${this.corsAnywhere}/${this.server}/${this.option}`;
     //@ts-ignore
     return this.http.get<any>(url, {responseType: 'text'})
   }
  findNewsById(id:string | null):Observable<INews> {
    const news = this.listNews.find(news => news.id === id);
    if(news) {
      return of(news).pipe(delay(50));
    }
    return throwError(new Error('404 Not Found'))
  }

}
