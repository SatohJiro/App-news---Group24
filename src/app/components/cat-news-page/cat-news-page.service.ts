import {Injectable} from '@angular/core';
import * as cheerio from "cheerio";
import {delay, Observable, of} from "rxjs";
import {INews} from "../news/news";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CatNewsPageService {
  server = 'https://nld.com.vn';
  option = 'cong-nghe.rss';
  corsAnywhere = 'https://mycorsproxy01.herokuapp.com';
  private listHomeNews: INews[] = []
  private text: string = '';
  constructor() { }

  // get data from rss
  getData(option: string): any[] {
     this.option = option;
    let data: any[] = [];
    const ajax = new XMLHttpRequest();
    const url = `${this.corsAnywhere}/${this.server}/${this.option}`;
    const asyns = true;
    const method = "GET";
    ajax.open(method, url, asyns);
    ajax.send();
    // @ts-ignore
    const getImg = (text: string) => {
      const $ = cheerio.load(text, {xmlMode: true});
      return $('img');
    }
    ajax.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const $ = cheerio.load(this.responseText, {xmlMode: true});
        $('item').each((i, item) => {
          data.push({
            id: i,
            title: $(item).find('title').text().trim(),
            link: $(item).find('link').text().trim(),
            guid: $(item).find('guid').text().trim(),
            description: {
              // @ts-ignore
              url: getImg($(item).find('description').text().trim()).attr("src"),
              alt: getImg($(item).find('description').text().trim()).attr("alt"),
              // @ts-ignore
              text: $(item).find('description').text().slice($(item).find('description').text().lastIndexOf(">") + 1).trim(),
            },
            pubDate: $(item).find('pubDate').text().trim(),
          })
        })
      }
    }
    console.log(data)
    return data;
  }
}
