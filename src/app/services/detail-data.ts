import {Idata} from "./idata";
import * as cheerio from "cheerio";
import {INews} from "../components/news/news";


export class DetailData implements Idata {

  data: [] =[];
  url: string ='';
  server = 'https://nld.com.vn';
  corsAnywhere ='https://mycorsproxy01.herokuapp.com';

  constructor(urlInput: string) {
    this.url = urlInput;
    this.getData();
  }



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
    this.data.push([{
      // @ts-ignore
      relatedData: this.getDataForRelated(),
    }]);

    this.data.push([{
      // @ts-ignore
      mostViewData: this.getDataForMostView(),
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


  getDataForRelated():any[] {
    const ajax = new XMLHttpRequest();
    let data: any[] = [];
    // ajax.timeout = 3000;
    const url = `${this.corsAnywhere}/${this.url}`;
    const asyns = true;
    const method = "GET";
    ajax.open(method, url, asyns);
    ajax.send();
    // @ts-ignore
    ajax.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const $ = cheerio.load(this.responseText);
        $('.news-relation-bottom > .list-item > .item > .img185x110').each((i, item) => {
          // @ts-ignore
          data.push({
            id: i,
            title: $(item).attr('title'),
            link: $(item).attr('href'),
            urlImg: $(item).find('img').attr('src')? $(item).find('img').attr('src'): $(item).find('video').attr('poster')
          });
        })
      }
    }
    return data;
  }


  getDataForMostView(): any[] {
    const ajax = new XMLHttpRequest();
    let data: any[] = [];
    // ajax.timeout = 3000;
    const url = `${this.corsAnywhere}/${this.url}`;
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
      }
    }
    return data;
  }


}
