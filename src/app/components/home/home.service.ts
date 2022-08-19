import {Injectable} from '@angular/core';
import * as cheerio from "cheerio";
import {delay, Observable, of, throwError} from "rxjs";
import {INews} from "../news/news";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  server = 'https://nld.com.vn';
  option = 'tin-moi-nhat.rss';
  corsAnywhere = 'https://mycorsproxy01.herokuapp.com';
  private listHomeNews: INews[] = []

  constructor(private http: HttpClient) {
  }

  getListNews(): Observable<INews[]> {
    return of(this.listHomeNews).pipe(delay(50));
  }

//home - hot-news tags
  getHotNewsTags(): string[] {
    const ajax = new XMLHttpRequest();
    let tags: any[] = [];
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
        $('.hot-news > .hot-news-item').each((i, tag) => {
          // @ts-ignore
          tags.push({
            id: i,
            name: $(tag).text(),
            link: $(tag).find('a').attr("href"),
            title: $(tag).find('a').attr("title")
          });
        })
      }
    }
    return tags;
  }

//home - topics
  getTopics(): string[] {
    const ajax = new XMLHttpRequest();
    let topics: any[] = [];
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
        $('.topic > .list-topic > li > a').each((i, topic) => {
          // @ts-ignore
          topics.push({
            id: i,
            title: $(topic).attr('title'),
            link: $(topic).attr('href'),
          });
        })

      }
    }
    return topics;
  }

//  home - tinnong
  getHotNewsData(): string[] {
    const ajax = new XMLHttpRequest();
    let data: any[] = [];
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
        $('#content-newest .news-thumb-title > a').each((i, item) => {
          // @ts-ignore
          data.push({
            id: i,
            title: $(item).attr('title'),
            link: $(item).attr('href'),
          });
        })
      }
    }
    return data;
  }

//  home - tinmoinhat rss
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
    return data;
  }

  getListVipNews(): any[] {
    const ajax = new XMLHttpRequest();
    let data: any[] = [];
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
        $('.boxcatepay ul li').each((i, item) => {
          // @ts-ignore
          data.push({
            id: i,
            title: $(item).find('a').attr('title'),
            link: $(item).find('a').attr('href'),
            urlImg: $(item).find('a > img').attr('src')
          });
        })
        // console.log(data);
      }
    }
    return data;
  }

  getListSubNews(): INews[] {
    const ajax = new XMLHttpRequest();
    let data: any[] = [];
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
        $('.news-horizontal-item > a').each((i, item) => {
          // @ts-ignore
          data.push({
            id: i,
            title: $(item).attr('title'),
            link: $(item).attr('href'),
            urlImg: $(item).find('img').attr('src') ? $(item).find('img').attr('src') : $(item).find('video').attr('poster')
          });
        })
      }
    }
    return data;
  }

  getMultimedia(): any {
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
        let mainNews = $('.box-media .main-news');
        data.mainNews = {
          id: "main",
          title: $(mainNews).find('a').attr('title'),
          link: $(mainNews).find('a').attr('href'),
          urlImg: $(mainNews).find('a > img').attr('src') ? $(mainNews).find('a > img').attr('src') : $(mainNews).find('a > video').attr('poster')
        }

        data.listSubNews = []
        $('.box-media .news-item').each((i, item) => {
          // @ts-ignore
          data.listSubNews.push(
            {
              id: i,
              title: $(item).find('a').attr('title'),
              link: $(item).find('a').attr('href'),
              urlImg: $(item).find('a > img').attr('src') ? $(item).find('a > img').attr('src') : $(item).find('a > video').attr('poster')
            }
          )
        })
      }
    }
    return data;
  }
  getWomen(): any {
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
        let mainNews = $('.box-women .news-left .main-news');
        data.newsLeft = {
          id: "newsLeft",
          title: $(mainNews).find(' a').attr('title'),
          link: $(mainNews).find(' a').attr('href'),
          urlImg: $(mainNews).find('a > img').attr('src') ? $(mainNews).find('a > img').attr('src') : $(mainNews).find('a > video').attr('poster')
        }
        data.newsRight = []
        $('.box-women .news-right ul li').each((i, item) => {
          // @ts-ignore
          data.newsRight.push(
            {
              id: i,
              title: $(item).find('a').attr('title'),
              link: $(item).find('a').attr('href'),
              urlImg: $(item).find('a > img').attr('src') ? $(item).find('a > img').attr('src') : $(item).find('a > video').attr('poster')
            }
          )
        })
        console.log(data.newsRight)
      }
    }
    return data;
  }

  getTrongNuoc(): any {
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
        let mainNews = $('.mg_t15 .news-main');
        data.newsLeft = {
          id: "newsLeft",
          title: $(mainNews).find(' a').attr('title'),
          link: $(mainNews).find(' a').attr('href'),
          urlImg: $(mainNews).find('a > img').attr('src') ? $(mainNews).find('a > img').attr('src') : $(mainNews).find('a > video').attr('poster'),
          content: $(mainNews).find('p').text(),
        }
        // console.log(data.newsLeft)
        data.newsRight = []
        $('.mg_t15 ul.sub-news li').each((i, item) => {
          // @ts-ignore
          data.newsRight.push(
            {
              id: i,
              title: $(item).find('a').attr('title'),
              link: $(item).find('a').attr('href'),
              urlImg: $(item).find('a > img').attr('src') ? $(item).find('a > img').attr('src') : $(item).find('a > video').attr('poster')
            }
          )
        })
      }

    }
    return data;
  }

}
