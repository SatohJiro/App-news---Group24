import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import * as cheerio from "cheerio";

import * as axios from 'axios';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServerService {

server = 'https://nld.com.vn';
option ='tin-moi-nhat.rss';
corsAnywhere ='https://mycorsproxy01.herokuapp.com';

httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  })
}
  constructor(private httpClient: HttpClient) { }
  //home - menu
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
             title: $(title).text().trim()
           });
          })

        }
      }
    return menuTitle;
  }
//  home - rss
  getData(option:string):any[] {
    this.option = option;
    let data:any[] = [];
    const ajax = new XMLHttpRequest();
    const url= `${this.corsAnywhere}/${this.server}/${this.option}`;
    const asyns = true;
    const method = "GET";
    ajax.open(method, url, asyns);
    ajax.send();
    // @ts-ignore
    const getImg= (text:string) =>{
      const $ = cheerio.load(text, {xmlMode: true});
      return $('img');
    }
    ajax.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const $ = cheerio.load(this.responseText, {xmlMode: true});
        $('item').each((i,item)=> {
          // @ts-ignore

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
                text:$(item).find('description').text().slice($(item).find('description').text().lastIndexOf(">")+1).trim(),
              },
              pubDate: $(item).find('pubDate').text().trim(),
            }
          );
        })
      }
    }
    return data;
  }

}

