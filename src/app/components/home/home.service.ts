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
  private text: string = '';
  dataHome: any =  {
    // tags: any,
    // boxContent1: {
    //   listHotNew:this.getListHotNews(),
    //   listNews: this.getListNews,
    //   listSubNews: this.getListSubNews(),
    //   listVipNews: this.getListVipNews(),
    //   listCateNews:this.getListCateNews(),
    // },
    // boxCatePay :this.getListVipNews(),
    // boxContent2: {
    // },
  }
  constructor(private http: HttpClient ) {

  }
  getListHotNews():INews[]{
    const url = `${this.corsAnywhere}/${this.server}`;
    const ajax = new XMLHttpRequest();
    const asyns = true;
    const method = "GET";
    ajax.open(method, url, asyns);
    ajax.send();
    const data:any[] = [];
    ajax.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const $ = cheerio.load(this.responseText);
        $('.list-news-thumb .news-thumb-title > a').each((i,news)=> {
          // @ts-ignore
          data.push({
            id:$(news).attr('data-newsid'),
            title: $(news).attr("title"),
            link : $(news).attr("href"),
          });
        })
      }
    }
    return data;
  }
 
  getListNews(option?:string):Observable<INews[]> {
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
          data.push({
            id:i,
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
          })
        })
      }
    }
    return of(data).pipe(delay(50));
  }
getListNewsRow():Observable<INews[]>{
  const url = `${this.corsAnywhere}/${this.server}`;
  const ajax = new XMLHttpRequest();
  const asyns = true;
  const method = "GET";
  ajax.open(method, url, asyns);
  ajax.send();
  const data:any[] = [];
  ajax.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const $ = cheerio.load(this.responseText);
      $('.news-horizontal-item > a').each((i,news)=> {
        // @ts-ignore
        data.push({
          id:$(news).attr('data-newsid'),
          title: $(news).attr("title"),
          link : $(news).attr("href"),
          description: {
            imgUrl: $(news).find('img').attr('src'),
            alt: $(news).find('img').attr('alt'),
          }
        });
      })
    }
  }
  return of(data).pipe(delay(50));
}
getBoxNewsList():Observable<any[]> {
  const url = `${this.corsAnywhere}/${this.server}`;
  const ajax = new XMLHttpRequest();
  const asyns = true;
  const method = "GET";
  ajax.open(method, url, asyns);
  ajax.send();
  const data:any[] = [];
  ajax.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const $ = cheerio.load(this.responseText);
      $('.box-news-list:first-of-type .news-item').each((i,news)=> {
        // @ts-ignore
        data.push({
          id:$(news).attr('data-newsid'),
          title: $(news).find('.img220x139').attr("title"),
          link : $(news).find('.img220x139').attr("href"),
          description: {
            imgUrl: $(news).find('.img220x139 > img').attr('src'),
            alt: $(news).find('.img220x139 > img').attr('alt'),
          },
          infor: {
            title1: $(news).find('.news-info ul li:first-of-type > a').attr('title'),
            link1: $(news).find('.news-info ul li:first-of-type > a').attr('href'),
            title2: $(news).find('.news-info ul li:last-of-type > a').attr('title'),
            link2: $(news).find('.news-info ul li:last-of-type > a').attr('href'),
          }
        });
      })
    }
  }
  return of(data).pipe(delay(50));
}
getNewsDocQuyen():Observable<INews[]>{
  const url = `${this.corsAnywhere}/${this.server}`;
  const ajax = new XMLHttpRequest();
  const asyns = true;
  const method = "GET";
  ajax.open(method, url, asyns);
  ajax.send();
  let data:any[] = [];
  ajax.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const $ = cheerio.load(this.responseText);
      $('.box-cate-list .box-docquyen .news-item > .img216x133').each((i,news)=> {
        // @ts-ignore
        data.push({
          id:i+'',
          title: $(news).attr("title"),
          link : $(news).attr("href"),
          description: {
            imgUrl: $(news).find('img').attr('src'),
            alt: $(news).find('img').attr('alt'),
          }
        })
      })
    }
  }
  return of(data).pipe(delay(50));
}
getNewsNoiThang():Observable<INews>{
  const url = `${this.corsAnywhere}/${this.server}`;
  const ajax = new XMLHttpRequest();
  const asyns = true;
  const method = "GET";
  ajax.open(method, url, asyns);
  ajax.send();
  let data:any = [];
  ajax.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const $ = cheerio.load(this.responseText);
      $('.box-cate-list .box-noithang .news-item > .img216x133').each((i,news)=> {
        // @ts-ignore
        data.push({
          id:i+'',
          title: $(news).attr("title"),
          link : $(news).attr("href"),
          description: {
            imgUrl: $(news).find('img').attr('src'),
            alt: $(news).find('img').attr('alt'),
          }
        })
      })
    }
  }
  return of(data).pipe(delay(50));
}
getHoiNongDapNhanh():Observable<INews>{
  const url = `${this.corsAnywhere}/${this.server}`;
  const ajax = new XMLHttpRequest();
  const asyns = true;
  const method = "GET";
  ajax.open(method, url, asyns);
  ajax.send();
  let data:any = [];
  ajax.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const $ = cheerio.load(this.responseText);
      $('.box-hoi-nong-dap-nhanh').each((i,news)=> {
        // @ts-ignore
        data.push({
          id:i+'',
          title: $(news).find('.box-hom-ngang-sub-content-thumb').attr("title"),
          link : $(news).find('.box-hom-ngang-sub-content-thumb').attr("href"),
          description: {
            imgUrl: $(news).find('img').attr('src'),
            alt: $(news).find('img').attr('alt'),
          }
        })
      })
    }
  }
  return of(data).pipe(delay(50));
}
  getTruyVetMangXaHoi():Observable<INews>{
    const url = `${this.corsAnywhere}/${this.server}`;
    const ajax = new XMLHttpRequest();
    const asyns = true;
    const method = "GET";
    ajax.open(method, url, asyns);
    ajax.send();
    let data:any = [];
    ajax.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const $ = cheerio.load(this.responseText);
        $('.box-truy-vet-mang-xa-hoi').each((i,news)=> {
          // @ts-ignore
          data.push({
            id:i+'',
            title: $(news).find('.box-hom-ngang-sub-content-thumb').attr("title"),
            link : $(news).find('.box-hom-ngang-sub-content-thumb').attr("href"),
            description: {
              imgUrl: $(news).find('.box-hom-ngang-sub-content-thumb > img').attr('src'),
              alt: $(news).find('.box-hom-ngang-sub-content-thumb > img').attr('alt'),
            }
          })
        })
      }
    }
    return of(data).pipe(delay(50));
  }
  getGocNhin():Observable<INews>{
    const url = `${this.corsAnywhere}/${this.server}`;
    const ajax = new XMLHttpRequest();
    const asyns = true;
    const method = "GET";
    ajax.open(method, url, asyns);
    ajax.send();
    let data:any = [];
    ajax.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const $ = cheerio.load(this.responseText);
        $('.box-goc-nhin').each((i,news)=> {
          // @ts-ignore
          data.push({
            id:i+'',
            title: $(news).find('.box-hom-ngang-sub-content-thumb').attr("title"),
            link : $(news).find('.box-hom-ngang-sub-content-thumb').attr("href"),
            description: {
              imgUrl: $(news).find('.box-hom-ngang-sub-content-thumb > img').attr('src'),
              alt: $(news).find('.box-hom-ngang-sub-content-thumb > img').attr('alt'),
            }
          })
        })
      }
    }
    return of(data).pipe(delay(50));
  }
  getBoxMostViewed(): Observable<INews>{
    const url = `${this.corsAnywhere}/${this.server}`;
    const ajax = new XMLHttpRequest();
    const asyns = true;
    const method = "GET";
    ajax.open(method, url, asyns);
    ajax.send();
    let data:any = [];
    ajax.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const $ = cheerio.load(this.responseText);
        $('.box-news-container .news-item').each((i,news)=> {
          // @ts-ignore
          data.push({
            id:$(news).attr('data-newsid'),
            title: $(news).find('.img220x139').attr("title"),
            link : $(news).find('.img220x139').attr("href"),
            description: {
              imgUrl: $(news).find('.img220x139 > img').attr('src'),
              alt: $(news).find('.img220x139 > img').attr('alt'),
            },
            infor: {
              title1: $(news).find('.news-info ul li:first-of-type > a').attr('title'),
              link1: $(news).find('.news-info ul li:first-of-type > a').attr('href'),
              title2: $(news).find('.news-info ul li:last-of-type > a').attr('title'),
              link2: $(news).find('.news-info ul li:last-of-type > a').attr('href'),
            }
          });
        })
      }
    }
    return of(data).pipe(delay(50));
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

getTopics():string[] {
  const ajax = new XMLHttpRequest();
  let topics:any[] = [];
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
      $('.topic > .list-topic > li > a').each((i,topic)=> {
        // @ts-ignore
        topics.push({
          id:i,
          title: $(topic).attr('title'),
          link: $(topic).attr('href'),
        });
      })
    }
    return topics;
  }

//  home - tinnong
getHotNewsData():unknown[] {
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
      $('#content-newest .news-thumb-title > a').each((i,item)=> {
        // @ts-ignore
        data.push({
          id:i,
          title: $(item).attr('title'),
          link: $(item).attr('href'),
        });
      })
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
  


getListVipNews():Observable<INews[]> {
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
          description: {
            imgUrl: $(item).find('a > img').attr('src'),
            alt:$(item).find('a > img').attr('alt')
          }
        });
      })
}
    }
   return of(data).pipe(delay(50));
}
  }

getListSubNews():INews[] {
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
          urlImg: $(item).find('img').attr('src')? $(item).find('img').attr('src'): $(item).find('video').attr('poster')
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
  getListSubContent():any[] {
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
        $('.box-home-ngang .box-home-ngang-sub').each((i, item) => {
          // @ts-ignore
          data.push({
            id: i,
            header: $(item).find(".box-hom-ngang-sub-title > i").css('background-image'),
            headerLink:$(item).find(".box-hom-ngang-sub-title").attr("href"),
            title: $(item).find(".box-hom-ngang-sub-content-title").attr("title"),
            link: $(item).attr('href'),
            url: $(item).find(".box-hom-ngang-sub-content-thumb").find('img').attr('src')
          });
        })
      }
    }
    return data;
  }
}
