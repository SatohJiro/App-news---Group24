import {Idata} from "./idata";
import * as cheerio from "cheerio";

export class DetailData implements Idata {

  data: [] =[];
  url: string ='';
  server = 'https://nld.com.vn';
  corsAnywhere ='https://mycorsproxy01.herokuapp.com';

  constructor(urlInput: string) {
    this.url = urlInput;
    this.getData();
  }


  // constructor(urlInput: string) {
  //   this.url = urlInput;
  // }

  getData(): void {

// @ts-ignore
    this.data.push([{
      // @ts-ignore
      headerData: this.getDataForHeaderDetail(),
    }]);
    this.data.push([{
      // @ts-ignore
      detailData: this.getDataDetail(),
    }]);

  }
  getDataForHeaderDetail():any[]{
    const ajax = new XMLHttpRequest();
    let headerData:any[] = [];
    // ajax.timeout = 3000;
    const url= `${this.corsAnywhere}/${this.url}`;
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
          headerData.push({
            id:i,
            title: $(title).text(),
          });
        });
      }
    }
    return headerData;
  }
  getDataDetail():any[]{
    const ajax = new XMLHttpRequest();
    let detailData:any[] = [];
    // ajax.timeout = 3000;
    const url= `${this.corsAnywhere}/${this.url}`;
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
          detailData.push({
            id:i,
            title: $(title).find('h1').text(),
            title_detail: $(title).find("h2").text(),
            content: $(title).find("div .contentbody .content-news-detail").html(),
            author:$(title).find("div .author").text(),
          });
        });
      }
    }
    return detailData;
  }



}
