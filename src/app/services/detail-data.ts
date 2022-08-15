import {Idata} from "./idata";
import {INews} from "../components/news/news";
import * as cheerio from "cheerio";
import {getAriaReferenceIds} from "@angular/cdk/a11y/aria-describer/aria-reference";

export class DetailData implements Idata {
  data: [] | undefined;
  url: string | undefined;
  server = 'https://nld.com.vn';
  corsAnywhere = 'https://mycorsproxy01.herokuapp.com';


  constructor(urlInput: string) {
    this.url = urlInput;
  }

  getData(): void {
    // @ts-ignore
    this.data?.push([{"relatedNews":this.getRelatedNews()}]);
  }

  getRelatedNews(): string[] {
    const ajax = new XMLHttpRequest();
    let relatedNews: any[] = [];
    // ajax.timeout = 3000;
    const url = `${this.corsAnywhere}/${this.url}`;
    const asyns = true;
    const method = "GET";
    ajax.open(method, url, asyns);
    ajax.send();
    // @ts-ignore
    ajax.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        // @ts-ignore
        const $ = this.cheerio.load(this.responseText);
        // @ts-ignore
        $('.news-relation-bottom > ul > li').each((i, el) => {
          relatedNews.push({
            id: i,
            link: $(el).find(" a ").attr("href"),
            image: $(el).find("a > img").attr("src"),
            title: $(el).find("a.title").attr("href"),
          });
        })
      }
    }
    return relatedNews;
    // }
  }


}
