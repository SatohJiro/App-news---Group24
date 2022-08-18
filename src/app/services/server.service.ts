import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import * as cheerio from "cheerio";

import * as axios from 'axios';
import {delay, Observable, of, throwError} from "rxjs";
import {INews} from "../components/news/news";
@Injectable({
  providedIn: 'root'
})

export class ServerService {
  server = 'https://nld.com.vn';
  option ='tin-moi-nhat.rss';
  corsAnywhere ='https://mycorsproxy01.herokuapp.com';
  listNews: INews[] = [];
  data:any[] = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) {
  }

  findNewsById(id:string):Observable<INews> {
    const news = this.listNews.find(news => news.id === id);
    if(news) {
      return of(news).pipe(delay(50));
    }
    return throwError(new Error('404 Not Found'))
  }
  getMenuData():string[] {
    const ajax = new XMLHttpRequest();
    let menuTitle:any[] = [];
    // ajax.timeout = 3000;
    const url= `${this.corsAnywhere}/${this.server}`;
    const asyns = true;
    const method = "GET";
    ajax.open(method, url, asyns);
    ajax.send();
    // @ts-ignore
    ajax.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const $ = cheerio.load(this.responseText);
        $('#MenuTopPage > .menu-top > li').each((i,title)=> {
          // @ts-ignore
          menuTitle.push({
            id:i,
            title: $(title).text().trim(),
            icon : $(title).find('i').attr('class')

          });
        })

      }
    }
    return menuTitle;
  }
  removeVietnameseTones(str:string):string {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
    str = str.replace(/đ/g,"d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g," ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    return str;
  }

//home - box-news
  getBoxNews() {
    const ajax = new XMLHttpRequest();
    let data:any[] = [];
    // ajax.timeout = 3000;
    const url= `${this.corsAnywhere}/${this.server}`;
    const asyns = true;
    const method = "GET";
    ajax.open(method, url, asyns);
    ajax.send();
    // @ts-ignore
    ajax.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const $ = cheerio.load(this.responseText);
        $('.box-news-list').find('.news-item').each((i, item) => {
          // @ts-ignore
          data.push({
            id: i,
            title: $(item).find('a').attr('title'),
            link: $(item).find('a').attr('href'),
            img: $(item).find('a > img').attr('src')?$(item).find
            ('a > img').attr('src'): $(item).find('a > video').attr('poster')
            ,
            subNews1: {
              title:$(item).find('.news-info li:first-child>a').attr('title'),
              link:$(item).find('.news-info li:first-child>a').attr('href')
            },
            subNews2: {
              title:$(item).find('.news-info li:last-child>a').attr('title'),
              link:$(item).find('.news-info li:last-child>a').attr('href')
            }
          });
        })
      }
    }
    return data;
  }
  getDataDetail(urlInput:String):string[] {
    const ajax = new XMLHttpRequest();
    let topics:any[] = [];
    // ajax.timeout = 3000;
    const url= `${this.corsAnywhere}/${urlInput}`;
    const asyns = true;
    const method = "GET";
    ajax.open(method, url, asyns);
    ajax.send();
    // @ts-ignore
    ajax.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const $ = cheerio.load(this.responseText);
        $('.nld-detail > .w520').each((i,title)=> {
          // @ts-ignore
          topics.push({
            id:i,
            title: $(title).find('h1').text(),
            title_detail: $(title).find("h2").text(),
            content: $(title).find("div .contentbody .content-news-detail").html(),
            author:$(title).find("div .author").text(),
          });
        });
      }
    }
    return topics;
  }
  getDataHeaderDetail(urlInput:String):string[] {
    const ajax = new XMLHttpRequest();
    let topics:any[] = [];
    // ajax.timeout = 3000;
    const url= `${this.corsAnywhere}/${urlInput}`;
    const asyns = true;
    const method = "GET";
    ajax.open(method, url, asyns);
    ajax.send();
    // @ts-ignore
    ajax.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const $ = cheerio.load(this.responseText);
        $('.nld-detail  > .sub-cate-detail > li > a').each((i,title)=> {
          // @ts-ignore
          topics.push({
            id:i,
            title: $(title).text(),
          });
        });
      }
    }
    return topics;
  }

  getDataRelatedDetail(urlInput:String):string[] {
    const ajax = new XMLHttpRequest();
    let topics:any[] = [];
    // ajax.timeout = 3000;
    const url= `${this.corsAnywhere}/${urlInput}`;
    const asyns = true;
    const method = "GET";
    ajax.open(method, url, asyns);
    ajax.send();
    // @ts-ignore
    ajax.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const $ = cheerio.load(this.responseText);
        $('.nld-detail  > .boxtinnoibat > ul > li').each((i,title)=> {
          // @ts-ignore
          topics.push({
            id:i,
            image: $(title).find("a img").attr("src"),
            description: $(title).find("a:nth-child(2)").text(),
          });
        });
      }
    }
    return topics;
  }


}
