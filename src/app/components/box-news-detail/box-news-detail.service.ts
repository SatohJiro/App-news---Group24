import { Injectable } from '@angular/core';
import * as cheerio from "cheerio";
import {delay, Observable, of, throwError} from "rxjs";
import {INews} from "../news/news";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BoxNewsDetailService {
  server = 'https://nld.com.vn/suc-khoe/vac-xin-phong-covid-19-duoc-gia-han-su-dung-van-dam-bao-chat-luong-20220818090707253.htm';
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
    //
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

  getBoxSameCategoryNews(): any {
    const ajax = new XMLHttpRequest();
    let data: any = {};
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
      let sameCate=  $('.boxcungchuyenmuc .news-first > a > img');
          // @ts-ignore
        //  data.first_news = {
        //   link: $(sameCate)? $(sameCate).find('img').attr('src') : '2',
        //    // title: $(sameCate).find(" .news-first a").attr("title"),
        //    // urlImg: $(sameCate).find(" .news-first a img").attr("src"),
        //
        //  };
        // console.log(data.first_news);
        sameCate ? console.log(sameCate.attr('src')) : console.log("345")
        // console.log(this.dataSecond);
        // console.log(this.dataListItem);
        // data.second_news = {
        //   link: $(sameCate).find(" .news-second a").attr("href"),
        //   title: $(sameCate).find(" .news-second a").attr("title"),
        //   urlImg: $(sameCate).find(" .news-second a img").attr("src"),
        //   sortContent: $(sameCate).find(".news-second p").text(),
        //
        // };
        //
        // data.listItem = []
        // $('.ajaxdetails .boxcungchuyenmuc .list-news ul li').each((i, item) => {
        //   // @ts-ignore
        //   data.listItem.push(
        //     {
        //       id:i,
        //       title: $(item).find('a').attr('title'),
        //       link: $(item).find('a').attr('href'),
        //       urlImg: $(item).find('a > img').attr('src') ? $(item).find('a > img').attr('src') : $(item).find('a > video').attr('poster')
        //     }
        //   )
        // })
        //
        // console.log(data);
      }
    }
    return data;
  }

}
