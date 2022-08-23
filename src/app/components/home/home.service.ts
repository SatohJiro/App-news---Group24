import {Injectable} from '@angular/core';
import * as cheerio from "cheerio";

import {BehaviorSubject, delay, Observable, of, shareReplay, switchMap} from "rxjs";

import {INews} from "../news/news";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  server = 'https://nld.com.vn';
  option = 'tin-moi-nhat.rss';
  corsAnywhere = 'https://mycorsproxy01.herokuapp.com';
  private _listHotNews$ = new BehaviorSubject<void>(undefined);
  private _tagsHotNews$ = new BehaviorSubject<void>(undefined);
  private _listNews$ = new BehaviorSubject<void>(undefined);
  private _rowListNews$ = new BehaviorSubject<void>(undefined);
  private _boxListNews$ = new BehaviorSubject<void>(undefined);
  private _noiThangNews$ = new BehaviorSubject<void>(undefined);
  private _docQuyenNews$ = new BehaviorSubject<void>(undefined);
  private _hoiNongDapNhanhNews$ = new BehaviorSubject<void>(undefined);
  private _truyVetMangXaHoiNews$ = new BehaviorSubject<void>(undefined);
  private _gocNhinNews$ = new BehaviorSubject<void>(undefined);
  private _listMostViewedNews$ = new BehaviorSubject<void>(undefined);
  //@ts-ignore
  public apiListHotNewsRequest$ = this.http.get<any[]>(`${this.corsAnywhere}/${this.server}`, {responseType: 'text'}).pipe(
    //@ts-ignore
    switchMap(data => this.loadListHotNews(data)),
  );
  public listHotNews$ = this._listHotNews$.pipe(switchMap(() => this.apiListHotNewsRequest$), shareReplay(1));
  //@ts-ignore

  public apiListNewsRequest$ = this.http.get<any[]>(`${this.corsAnywhere}/${this.server}/${this.option}`, {responseType: 'text'}).pipe(
    //@ts-ignore
    switchMap(data => this.loadListNews(data)),
  );
  public listNews$ = this._listNews$.pipe(switchMap(() => this.apiListNewsRequest$), shareReplay(1));

  //@ts-ignore
  public apiTagsHotNewsRequest$ = this.http.get<any[]>(`${this.corsAnywhere}/${this.server}`, {responseType: 'text'}).pipe(
    //@ts-ignore
    switchMap(data => this.loadTagsHotNew(data)),
  );
  public tagsHotNews$ = this._tagsHotNews$.pipe(switchMap(() => this.apiTagsHotNewsRequest$), shareReplay(1));

//@ts-ignore
  public apiRowListNewsRequest$ = this.http.get<any[]>(`${this.corsAnywhere}/${this.server}`, {responseType: 'text'}).pipe(
    //@ts-ignore
    switchMap(data => this.loadRowListNews(data)),
  );
  public rowListNews$ = this._rowListNews$.pipe(switchMap(() => this.apiRowListNewsRequest$), shareReplay(1));

  //@ts-ignore
  public apiBoxListNews$ = this.http.get<any[]>(`${this.corsAnywhere}/${this.server}`, {responseType: 'text'}).pipe(
    //@ts-ignore
    switchMap(data => this.loadBoxListNews(data)),
  );
  public boxListNews$ = this._boxListNews$.pipe(switchMap(() => this.apiBoxListNews$), shareReplay(1));

  //@ts-ignore
  public apiNoiThangNewsRequest$ = this.http.get<any[]>(`${this.corsAnywhere}/${this.server}`, {responseType: 'text'}).pipe(
    //@ts-ignore
    switchMap(data => this.loadNoiThangNews(data)),
  );
  public noiThangNews$ = this._noiThangNews$.pipe(switchMap(() => this.apiNoiThangNewsRequest$), shareReplay(1));

  //@ts-ignore
  public apiDocQuyenNewsRequest$ = this.http.get<any[]>(`${this.corsAnywhere}/${this.server}`, {responseType: 'text'}).pipe(
    //@ts-ignore
    switchMap(data => this.loadDocQuyenNews(data)),
  );
  public docQuyenNews$ = this._docQuyenNews$.pipe(switchMap(() => this.apiDocQuyenNewsRequest$), shareReplay(1));

  //@ts-ignore
  public apiHoiNongDapNhanhNewsRequest$ = this.http.get<any[]>(`${this.corsAnywhere}/${this.server}`, {responseType: 'text'}).pipe(
    //@ts-ignore
    switchMap(data => this.loadHoiNongDapNhanhNews(data)),
  );
  public hoiNongDapNhanhNews$ = this._hoiNongDapNhanhNews$.pipe(switchMap(() => this.apiHoiNongDapNhanhNewsRequest$), shareReplay(1));
//@ts-ignore
  public apiGocNhinNewsRequest$ = this.http.get<any[]>(`${this.corsAnywhere}/${this.server}`, {responseType: 'text'}).pipe(
    //@ts-ignore
    switchMap(data => this.loadGocNhinNews(data)),
  );
  public gocNhinNews$ = this._gocNhinNews$.pipe(switchMap(() => this.apiGocNhinNewsRequest$), shareReplay(1));

  //@ts-ignore
  public apiTruyVetMangXaHoiNewsRequest$ = this.http.get<any[]>(`${this.corsAnywhere}/${this.server}`, {responseType: 'text'}).pipe(
    //@ts-ignore
    switchMap(data => this.loadTruyVetMangXaHoiNews(data)),
  );
  public truyVetMangXaHoiNews$ = this._truyVetMangXaHoiNews$.pipe(switchMap(() => this.apiTruyVetMangXaHoiNewsRequest$), shareReplay(1));

  //@ts-ignore
  public apiListMostViewedNewsRequest$ = this.http.get<any[]>(`${this.corsAnywhere}/${this.server}`, {responseType: 'text'}).pipe(
    //@ts-ignore
    switchMap(data => this.loadListMostViewedNews(data)),
  );
  public listMostViewedNews$ = this._listMostViewedNews$.pipe(switchMap(() => this.apiListMostViewedNewsRequest$), shareReplay(1));


  constructor(private http: HttpClient) {

  }


  loadTagsHotNew(text: string) {
    const $ = cheerio.load(text);
    let data: any[] = [];
    const change = (temp: string) => {
      return this.changeUrlPattern(temp);
    }

    $('.hot-news-item > a').each((i, tag) => {
      // @ts-ignore
      data.push({
        id: $(tag).attr(''),
        title: $(tag).attr("title"),

        // @ts-ignore
        link:change($(tag).attr("href")) ,

        time: new Date().toISOString()
      });
    })
    return of(data).pipe(delay(50))
  }


  loadListHotNews(text: string) {
    const $ = cheerio.load(text);
    let data: any[] = [];
    const change = (temp: string) => {
      return this.changeUrlPattern(temp);
    }
    $('.list-news-thumb .news-thumb-title > a').each((i, news) => {
      // @ts-ignore
      data.push({
        id: $(news).attr('data-newsid'),
        title: $(news).attr("title"),
        // @ts-ignore
        link:change($(news).attr("href")) ,
        time: new Date().toISOString()
      });
    })
    return of(data).pipe(delay(50))
  }

  loadListNews(text: string) {

    const getImg = (text: string) => {
      const $ = cheerio.load(text, {xmlMode: true});
      return $('img');
    }

    const $ = cheerio.load(text, {xmlMode: true});
    let data: any[] = [];
    const change = (temp: string) => {
      return this.changeUrlPattern(temp);
    }

    $('item').each((i, item) => {
      data.push({
        id: i,
        title: $(item).find('title').text().trim(),

        link: change($(item).find('link').text().trim()),

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
    return of(data).pipe(delay(50))
  }

  loadRowListNews(text: string) {
    const $ = cheerio.load(text);
    let data: any[] = [];
    const change = (temp: string) => {
      return this.changeUrlPattern(temp);
    }
    $('.news-horizontal-item > a').each((i, news) => {
      // @ts-ignore
      data.push({
        id: $(news).attr('data-newsid'),
        title: $(news).attr("title"),
        // @ts-ignore
        link: change($(news).attr("href")),
        description: {
          imgUrl: $(news).find('img').attr('src'),
          alt: $(news).find('img').attr('alt'),
        }
      });
    })
    return of(data).pipe(delay(50))
  }

  loadBoxListNews(text: string) {
    const $ = cheerio.load(text);
    let data: any[] = [];
    const change = (temp: string) => {
      return this.changeUrlPattern(temp);
    }
    $('.box-news-list:first-of-type .news-item').each((i, news) => {
      // @ts-ignore
      data.push({
        id: $(news).attr('data-newsid'),
        title: $(news).find('.img220x139').attr("title"),
        // @ts-ignore
        link: change($(news).find('.img220x139').attr("href")),
        description: {
          imgUrl: $(news).find('.img220x139 > img').attr('src') ? $(news).find('.img220x139 > img').attr('src') : $(news).find('.img220x139 > video').attr('poster'),
          alt: $(news).find('.img220x139 > img').attr('alt'),
        },
        infor: {
          title1: $(news).find('.news-info ul li:first-of-type > a').attr('title'),
          // @ts-ignore
          link1: change($(news).find('.news-info ul li:first-of-type > a').attr('href')),
          title2: $(news).find('.news-info ul li:last-of-type > a').attr('title'),
          // @ts-ignore
          link2: change($(news).find('.news-info ul li:last-of-type > a').attr('href')),
        }
      });
    })
    return of(data).pipe(delay(50))
  }

  loadNoiThangNews(text: string) {
    const $ = cheerio.load(text);
    let data: any[] = [];
    const change = (temp: string) => {
      return this.changeUrlPattern(temp);
    }
    $('.box-cate-list .box-noithang .news-item > .img216x133').each((i, news) => {
      // @ts-ignore
      data.push({
        id: i + '',
        title: $(news).attr("title"),
        // @ts-ignore
        link: change($(news).attr("href")),

        description: {
          imgUrl: $(news).find('img').attr('src'),
          alt: $(news).find('img').attr('alt'),
        }

      })
    })
    return of(data).pipe(delay(50))
  }

  // getListHotNews(): Observable<INews[]> {
  //   const url = `${this.corsAnywhere}/${this.server}`;
  //   const ajax = new XMLHttpRequest();
  //   const asyns = true;
  //   let time = new Date().toISOString()
  //   const method = "GET";
  //   ajax.open(method, url, asyns);
  //   ajax.send();
  //   const data: any[] = [];
  //   ajax.onreadystatechange = function () {
  //     if (this.readyState === 4 && this.status === 200) {
  //       const $ = cheerio.load(this.responseText);
  //       $('.list-news-thumb .news-thumb-title > a').each((i, news) => {
  //         // @ts-ignore
  //         data.push({
  //           id: $(news).attr('data-newsid'),
  //           title: $(news).attr("title"),
  //           link: $(news).attr("href"),
  //           time: time
  //         });
  //       })
  //     }
  //   }
  //   return of(data).pipe(delay(50),shareReplay(1));
  // }

  // getListNews(option?: string): Observable<INews[]> {
  //   let data: any[] = [];
  //   const ajax = new XMLHttpRequest();
  //   const url = `${this.corsAnywhere}/${this.server}/${this.option}`;
  //   const asyns = true;
  //   const method = "GET";
  //   ajax.open(method, url, asyns);
  //   ajax.send();
  //   // @ts-ignore
  //   const getImg = (text: string) => {
  //     const $ = cheerio.load(text, {xmlMode: true});
  //     return $('img');
  //   }
  //   ajax.onreadystatechange = function () {
  //     if (this.readyState === 4 && this.status === 200) {
  //       const $ = cheerio.load(this.responseText, {xmlMode: true});
  //       $('item').each((i, item) => {
  //         data.push({
  //           id: i,
  //           title: $(item).find('title').text().trim(),
  //           link: $(item).find('link').text().trim(),
  //           guid: $(item).find('guid').text().trim(),
  //           description: {
  //             // @ts-ignore
  //             url: getImg($(item).find('description').text().trim()).attr("src"),
  //             alt: getImg($(item).find('description').text().trim()).attr("alt"),
  //             // @ts-ignore
  //             text: $(item).find('description').text().slice($(item).find('description').text().lastIndexOf(">") + 1).trim(),
  //           },
  //           pubDate: $(item).find('pubDate').text().trim(),
  //         })
  //       })
  //     }
  //   }
  //   return of(data).pipe(delay(50));
  // }

  // getListNewsRow(): Observable<INews[]> {
  //   const url = `${this.corsAnywhere}/${this.server}`;
  //   const ajax = new XMLHttpRequest();
  //   const asyns = true;
  //   const method = "GET";
  //   ajax.open(method, url, asyns);
  //   ajax.send();
  //   const data: any[] = [];
  //   ajax.onreadystatechange = function () {
  //     if (this.readyState === 4 && this.status === 200) {
  //       const $ = cheerio.load(this.responseText);
  //       $('.news-horizontal-item > a').each((i, news) => {
  //         // @ts-ignore
  //         data.push({
  //           id: $(news).attr('data-newsid'),
  //           title: $(news).attr("title"),
  //           link: $(news).attr("href"),
  //           description: {
  //             imgUrl: $(news).find('img').attr('src'),
  //             alt: $(news).find('img').attr('alt'),
  //           }
  //         });
  //       })
  //     }
  //   }
  //   return of(data).pipe(delay(50));
  // }
  //
  // getBoxNewsList(): Observable<any[]> {
  //   const url = `${this.corsAnywhere}/${this.server}`;
  //   const ajax = new XMLHttpRequest();
  //   const asyns = true;
  //   const method = "GET";
  //   ajax.open(method, url, asyns);
  //   ajax.send();
  //   const data: any[] = [];
  //   ajax.onreadystatechange = function () {
  //     if (this.readyState === 4 && this.status === 200) {
  //       const $ = cheerio.load(this.responseText);
  //       $('.box-news-list:first-of-type .news-item').each((i, news) => {
  //         // @ts-ignore
  //         data.push({
  //           id: $(news).attr('data-newsid'),
  //           title: $(news).find('.img220x139').attr("title"),
  //           link: $(news).find('.img220x139').attr("href"),
  //           description: {
  //             imgUrl: $(news).find('.img220x139 > img').attr('src') ? $(news).find('.img220x139 > img').attr('src') : $(news).find('.img220x139 > video').attr('poster'),
  //             alt: $(news).find('.img220x139 > img').attr('alt'),
  //           },
  //           infor: {
  //             title1: $(news).find('.news-info ul li:first-of-type > a').attr('title'),
  //             link1: $(news).find('.news-info ul li:first-of-type > a').attr('href'),
  //             title2: $(news).find('.news-info ul li:last-of-type > a').attr('title'),
  //             link2: $(news).find('.news-info ul li:last-of-type > a').attr('href'),
  //           }
  //         });
  //       })
  //     }
  //   }
  //   return of(data).pipe(delay(50));
  // }
  loadDocQuyenNews(text: string) {
    const $ = cheerio.load(text);
    let data: any[] = [];
    const change = (temp: string) => {
      return this.changeUrlPattern(temp);
    }
    $('.box-cate-list .box-docquyen .news-item > .img216x133').each((i, news) => {
      // @ts-ignore
      data.push({
        id: i + '',
        title: $(news).attr("title"),
        // @ts-ignore
        link: change($(news).attr("href")),
        description: {
          imgUrl: $(news).find('img').attr('src'),
          alt: $(news).find('img').attr('alt'),
        }
      })
    })
    return of(data).pipe(delay(50))
  }

  // getNewsDocQuyen(): Observable<INews[]> {
  //   const url = `${this.corsAnywhere}/${this.server}`;
  //   const ajax = new XMLHttpRequest();
  //   const asyns = true;
  //   const method = "GET";
  //   ajax.open(method, url, asyns);
  //   ajax.send();
  //   let data: any[] = [];
  //   ajax.onreadystatechange = function () {
  //     if (this.readyState === 4 && this.status === 200) {
  //       const $ = cheerio.load(this.responseText);
  //       $('.box-cate-list .box-docquyen .news-item > .img216x133').each((i, news) => {
  //         // @ts-ignore
  //         data.push({
  //           id: i + '',
  //           title: $(news).attr("title"),
  //           link: $(news).attr("href"),
  //           description: {
  //             imgUrl: $(news).find('img').attr('src'),
  //             alt: $(news).find('img').attr('alt'),
  //           }
  //         })
  //       })
  //     }
  //   }
  //   return of(data).pipe(delay(50));
  // }

  // getNewsNoiThang(): Observable<INews> {
  //   const url = `${this.corsAnywhere}/${this.server}`;
  //   const ajax = new XMLHttpRequest();
  //   const asyns = true;
  //   const method = "GET";
  //   ajax.open(method, url, asyns);
  //   ajax.send();
  //   let data: any = [];
  //   ajax.onreadystatechange = function () {
  //     if (this.readyState === 4 && this.status === 200) {
  //       const $ = cheerio.load(this.responseText);
  //       $('.box-cate-list .box-noithang .news-item > .img216x133').each((i, news) => {
  //         // @ts-ignore
  //         data.push({
  //           id: i + '',
  //           title: $(news).attr("title"),
  //           link: $(news).attr("href"),
  //           description: {
  //             imgUrl: $(news).find('img').attr('src'),
  //             alt: $(news).find('img').attr('alt'),
  //           }
  //         })
  //       })
  //     }
  //   }
  //   return of(data).pipe(delay(50));
  // }
  loadHoiNongDapNhanhNews(text: string) {
    const $ = cheerio.load(text);
    let data: any[] = [];
    const change = (temp: string) => {
      return this.changeUrlPattern(temp);
    }
    $('.box-hoi-nong-dap-nhanh').each((i, news) => {
      // @ts-ignore
      data.push({
        id: i + '',
        // @ts-ignore
        title: change($(news).find('.box-hom-ngang-sub-content-thumb').attr("title")),
        link: $(news).find('.box-hom-ngang-sub-content-thumb').attr("href"),

        description: {
          imgUrl: $(news).find('img').attr('src'),
          alt: $(news).find('img').attr('alt'),
        }
      })
    })
    return of(data).pipe(delay(50))
  }
  // getListHotNews(): Observable<INews[]> {
  //   const url = `${this.corsAnywhere}/${this.server}`;
  //   const ajax = new XMLHttpRequest();
  //   const asyns = true;
  //   let time = new Date().toISOString()
  //   const method = "GET";
  //   ajax.open(method, url, asyns);
  //   ajax.send();
  //   const data: any[] = [];
  //   ajax.onreadystatechange = function () {
  //     if (this.readyState === 4 && this.status === 200) {
  //       const $ = cheerio.load(this.responseText);
  //       $('.list-news-thumb .news-thumb-title > a').each((i, news) => {
  //         // @ts-ignore
  //         data.push({
  //           id: $(news).attr('data-newsid'),
  //           title: $(news).attr("title"),
  //           link: $(news).attr("href"),
  //           time: time
  //         });
  //       })
  //     }
  //   }
  //   return of(data).pipe(delay(50),shareReplay(1));
  // }

  // getHoiNongDapNhanh(): Observable<INews> {
  //   const url = `${this.corsAnywhere}/${this.server}`;
  //   const ajax = new XMLHttpRequest();

  //   const asyns = true;
  //   const method = "GET";
  //   ajax.open(method, url, asyns);
  //   ajax.send();

  //   let data: any = [];
  //   ajax.onreadystatechange = function () {
  //     if (this.readyState === 4 && this.status === 200) {
  //       const $ = cheerio.load(this.responseText);
  //       $('.box-hoi-nong-dap-nhanh').each((i, news) => {
  //         // @ts-ignore
  //         data.push({
  //           id: i + '',
  //           title: $(news).find('.box-hom-ngang-sub-content-thumb').attr("title"),
  //           link: $(news).find('.box-hom-ngang-sub-content-thumb').attr("href"),
  //           description: {
  //             imgUrl: $(news).find('img').attr('src'),
  //             alt: $(news).find('img').attr('alt'),
  //           }

  //         })
  //       })
  //     }
  //   }
  //   return of(data).pipe(delay(50));
  // }

  loadTruyVetMangXaHoiNews(text: string) {
    const $ = cheerio.load(text);
    let data: any[] = [];
    const change = (temp: string) => {
      return this.changeUrlPattern(temp);
    }
    $('.box-truy-vet-mang-xa-hoi').each((i, news) => {
      // @ts-ignore
      data.push({
        id: i + '',
        title: $(news).find('.box-hom-ngang-sub-content-thumb').attr("title"),
        // @ts-ignore
        link: change($(news).find('.box-hom-ngang-sub-content-thumb').attr("href")),
        description: {
          imgUrl: $(news).find('.box-hom-ngang-sub-content-thumb > img').attr('src'),
          alt: $(news).find('.box-hom-ngang-sub-content-thumb > img').attr('alt'),
        }
      })
    })
    return of(data).pipe(delay(50))
  }

  // getTruyVetMangXaHoi(): Observable<INews> {

  //   const url = `${this.corsAnywhere}/${this.server}`;
  //   const ajax = new XMLHttpRequest();
  //   const asyns = true;
  //   const method = "GET";
  //   ajax.open(method, url, asyns);
  //   ajax.send();

  //   let data: any = [];
  //   ajax.onreadystatechange = function () {
  //     if (this.readyState === 4 && this.status === 200) {
  //       const $ = cheerio.load(this.responseText);
  //       $('.box-truy-vet-mang-xa-hoi').each((i, news) => {
  //         // @ts-ignore
  //         data.push({
  //           id: i + '',
  //           title: $(news).find('.box-hom-ngang-sub-content-thumb').attr("title"),
  //           link: $(news).find('.box-hom-ngang-sub-content-thumb').attr("href"),
  //           description: {
  //             imgUrl: $(news).find('.box-hom-ngang-sub-content-thumb > img').attr('src'),
  //             alt: $(news).find('.box-hom-ngang-sub-content-thumb > img').attr('alt'),
  //           }
  //         })

  //       })
  //     }
  //   }
  //   return of(data).pipe(delay(50));
  // }

  loadGocNhinNews(text: string) {
    const $ = cheerio.load(text);
    let data: any[] = [];
    const change = (temp: string) => {
      return this.changeUrlPattern(temp);
    }
    $('.box-goc-nhin').each((i, news) => {
      // @ts-ignore
      data.push({
        id: i + '',
        title: $(news).find('.box-hom-ngang-sub-content-thumb').attr("title"),
        // @ts-ignore
        link: change($(news).find('.box-hom-ngang-sub-content-thumb').attr("href")),
        description: {
          imgUrl: $(news).find('.box-hom-ngang-sub-content-thumb > img').attr('src'),
          alt: $(news).find('.box-hom-ngang-sub-content-thumb > img').attr('alt'),

        }
      })
    })
    return of(data).pipe(delay(50))
  }
  // getNewsDocQuyen(): Observable<INews[]> {
  //   const url = `${this.corsAnywhere}/${this.server}`;
  //   const ajax = new XMLHttpRequest();
  //   const asyns = true;
  //   const method = "GET";
  //   ajax.open(method, url, asyns);
  //   ajax.send();
  //   let data: any[] = [];
  //   ajax.onreadystatechange = function () {
  //     if (this.readyState === 4 && this.status === 200) {
  //       const $ = cheerio.load(this.responseText);
  //       $('.box-cate-list .box-docquyen .news-item > .img216x133').each((i, news) => {
  //         // @ts-ignore
  //         data.push({
  //           id: i + '',
  //           title: $(news).attr("title"),
  //           link: $(news).attr("href"),
  //           description: {
  //             imgUrl: $(news).find('img').attr('src'),
  //             alt: $(news).find('img').attr('alt'),
  //           }
  //         })
  //       })
  //     }
  //   }
  //   return of(data).pipe(delay(50));
  // }


  // getGocNhin(): Observable<INews> {

  //   const url = `${this.corsAnywhere}/${this.server}`;
  //   const ajax = new XMLHttpRequest();
  //   const asyns = true;
  //   const method = "GET";
  //   ajax.open(method, url, asyns);
  //   ajax.send();
  //   let data: any = [];
  //   ajax.onreadystatechange = function () {
  //     if (this.readyState === 4 && this.status === 200) {
  //       const $ = cheerio.load(this.responseText);
  //       $('.box-goc-nhin').each((i, news) => {
  //         // @ts-ignore
  //         data.push({
  //           id: i + '',
  //           title: $(news).find('.box-hom-ngang-sub-content-thumb').attr("title"),
  //           link: $(news).find('.box-hom-ngang-sub-content-thumb').attr("href"),
  //           description: {
  //             imgUrl: $(news).find('.box-hom-ngang-sub-content-thumb > img').attr('src'),
  //             alt: $(news).find('.box-hom-ngang-sub-content-thumb > img').attr('alt'),
  //           }
  //         })
  //       })
  //     }
  //   }
  //   return of(data).pipe(delay(50));
  // }

  loadListMostViewedNews(text: string) {
    const $ = cheerio.load(text);
    let data: any[] = [];
    const change = (temp: string) => {
      return this.changeUrlPattern(temp);
    }
    $('.box-news-container .news-item').each((i, news) => {
      // @ts-ignore
      data.push({
        id: $(news).attr('data-newsid'),
        title: $(news).find('.img220x139').attr("title"),
        // @ts-ignore
        link: change($(news).find('.img220x139').attr("href")),
        description: {
          imgUrl: $(news).find('.img220x139 > img').attr('src') ? $(news).find('.img220x139 > img').attr('src') : $(news).find('.img220x139 > video').attr('poster'),
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
    return of(data).pipe(delay(50))
  }
  // getGocNhin(): Observable<INews> {
  //   const url = `${this.corsAnywhere}/${this.server}`;
  //   const ajax = new XMLHttpRequest();
  //   const asyns = true;
  //   const method = "GET";
  //   ajax.open(method, url, asyns);
  //   ajax.send();
  //   let data: any = [];
  //   ajax.onreadystatechange = function () {
  //     if (this.readyState === 4 && this.status === 200) {
  //       const $ = cheerio.load(this.responseText);
  //       $('.box-goc-nhin').each((i, news) => {
  //         // @ts-ignore
  //         data.push({
  //           id: i + '',
  //           title: $(news).find('.box-hom-ngang-sub-content-thumb').attr("title"),
  //           link: $(news).find('.box-hom-ngang-sub-content-thumb').attr("href"),
  //           description: {
  //             imgUrl: $(news).find('.box-hom-ngang-sub-content-thumb > img').attr('src'),
  //             alt: $(news).find('.box-hom-ngang-sub-content-thumb > img').attr('alt'),
  //           }
  //         })
  //       })
  //     }
  //   }
  //   return of(data).pipe(delay(50));
  // }
  loadListMostViewedNews(text:string) {
    const $ = cheerio.load(text);
    let data:any[] = [];
    $('.box-news-container .news-item').each((i, news) => {
      // @ts-ignore
      data.push({
        id: $(news).attr('data-newsid'),
        title: $(news).find('.img220x139').attr("title"),
        link: $(news).find('.img220x139').attr("href"),
        description: {
          imgUrl: $(news).find('.img220x139 > img').attr('src') ? $(news).find('.img220x139 > img').attr('src') : $(news).find('.img220x139 > video').attr('poster'),
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
    return of(data).pipe(delay(50))
  }
  // getBoxMostViewed(): Observable<INews> {
  //   const url = `${this.corsAnywhere}/${this.server}`;
  //   const ajax = new XMLHttpRequest();
  //   const asyns = true;
  //   const method = "GET";
  //   ajax.open(method, url, asyns);
  //   ajax.send();
  //   let data: any = [];
  //   ajax.onreadystatechange = function () {
  //     if (this.readyState === 4 && this.status === 200) {
  //       const $ = cheerio.load(this.responseText);
  //       $('.box-news-container .news-item').each((i, news) => {
  //         // @ts-ignore
  //         data.push({
  //           id: $(news).attr('data-newsid'),
  //           title: $(news).find('.img220x139').attr("title"),
  //           link: $(news).find('.img220x139').attr("href"),
  //           description: {
  //             imgUrl: $(news).find('.img220x139 > img').attr('src') ? $(news).find('.img220x139 > img').attr('src') : $(news).find('.img220x139 > video').attr('poster'),
  //             alt: $(news).find('.img220x139 > img').attr('alt'),
  //           },
  //           infor: {
  //             title1: $(news).find('.news-info ul li:first-of-type > a').attr('title'),
  //             link1: $(news).find('.news-info ul li:first-of-type > a').attr('href'),
  //             title2: $(news).find('.news-info ul li:last-of-type > a').attr('title'),
  //             link2: $(news).find('.news-info ul li:last-of-type > a').attr('href'),
  //           }
  //         });
  //       })
  //     }
  //   }
  //   return of(data).pipe(delay(50));
  // }

  // getBoxMostViewed(): Observable<INews> {
  //   const url = `${this.corsAnywhere}/${this.server}`;
  //   const ajax = new XMLHttpRequest();
  //   const asyns = true;
  //   const method = "GET";
  //   ajax.open(method, url, asyns);
  //   ajax.send();
  //   let data: any = [];
  //   ajax.onreadystatechange = function () {
  //     if (this.readyState === 4 && this.status === 200) {
  //       const $ = cheerio.load(this.responseText);
  //       $('.box-news-container .news-item').each((i, news) => {
  //         // @ts-ignore
  //         data.push({
  //           id: $(news).attr('data-newsid'),
  //           title: $(news).find('.img220x139').attr("title"),
  //           link: $(news).find('.img220x139').attr("href"),
  //           description: {
  //             imgUrl: $(news).find('.img220x139 > img').attr('src') ? $(news).find('.img220x139 > img').attr('src') : $(news).find('.img220x139 > video').attr('poster'),
  //             alt: $(news).find('.img220x139 > img').attr('alt'),
  //           },
  //           infor: {
  //             title1: $(news).find('.news-info ul li:first-of-type > a').attr('title'),
  //             link1: $(news).find('.news-info ul li:first-of-type > a').attr('href'),
  //             title2: $(news).find('.news-info ul li:last-of-type > a').attr('title'),
  //             link2: $(news).find('.news-info ul li:last-of-type > a').attr('href'),
  //           }
  //         });
  //       })
  //     }
  //   }
  //   return of(data).pipe(delay(50));
  // }

//home - hot-news tags
//   getHotNewsTags(): Observable<any> {
//     const ajax = new XMLHttpRequest();
//     let tags: any[] = [];
//     // ajax.timeout = 3000;
//     const url = `${this.corsAnywhere}/${this.server}`;
//     const asyns = true;
//     const method = "GET";
//     ajax.open(method, url, asyns);
//     ajax.send();
//     // @ts-ignore
//     ajax.onreadystatechange = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         const $ = cheerio.load(this.responseText);
//         $('.hot-news > .hot-news-item').each((i, tag) => {
//           // @ts-ignore
//           tags.push({
//             id: i,
//             name: $(tag).text(),
//             link: $(tag).find('a').attr("href"),
//             title: $(tag).find('a').attr("title")
//           });
//         })
//       }
//     }
//     return of(tags).pipe(delay(50));
//   }

//home - topics

// @ts-ignore
//   getTopics(): string[] {
//     const ajax = new XMLHttpRequest();
//     let topics: any[] = [];
//     // ajax.timeout = 3000;
//     const url = `${this.corsAnywhere}/${this.server}`;
//     const asyns = true;
//     const method = "GET";
//     ajax.open(method, url, asyns);
//     ajax.send();
//     // @ts-ignore
//     ajax.onreadystatechange = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         const $ = cheerio.load(this.responseText);
//         $('.topic > .list-topic > li > a').each((i, topic) => {
//           // @ts-ignore
//           topics.push({
//             id: i,
//             title: $(topic).attr('title'),
//             link: $(topic).attr('href'),
//           });
//         })
//       }
//       return topics;
//     }
//   }


//  home - tinnong
// @ts-ignore
//   getHotNewsData(): unknown[] {
//     const ajax = new XMLHttpRequest();
//     let data: any[] = [];
//     // ajax.timeout = 3000;
//     const url = `${this.corsAnywhere}/${this.server}`;
//     const asyns = true;
//     const method = "GET";
//     ajax.open(method, url, asyns);
//     ajax.send();
//     // @ts-ignore
//     ajax.onreadystatechange = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         const $ = cheerio.load(this.responseText);
//         $('#content-newest .news-thumb-title > a').each((i, item) => {
//           // @ts-ignore
//           data.push({
//             id: i,
//             title: $(item).attr('title'),
//             link: $(item).attr('href'),
//           });
//         })
//       }
//       return data;
//     }
//   }


//  home - tinmoinhat rss
//   getData(option: string): any[] {
//     this.option = option;
//     let data: any[] = [];
//     const ajax = new XMLHttpRequest();
//     const url = `${this.corsAnywhere}/${this.server}/${this.option}`;
//     const asyns = true;
//     const method = "GET";
//     ajax.open(method, url, asyns);
//     ajax.send();
//     // @ts-ignore
//     const getImg = (text: string) => {
//       const $ = cheerio.load(text, {xmlMode: true});
//       return $('img');
//     }
//     ajax.onreadystatechange = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         const $ = cheerio.load(this.responseText, {xmlMode: true});
//         $('item').each((i, item) => {
//           data.push({
//             id: i,
//             title: $(item).find('title').text().trim(),
//             link: $(item).find('link').text().trim(),
//             guid: $(item).find('guid').text().trim(),
//             description: {
//               // @ts-ignore
//               url: getImg($(item).find('description').text().trim()).attr("src"),
//               alt: getImg($(item).find('description').text().trim()).attr("alt"),
//               // @ts-ignore
//               text: $(item).find('description').text().slice($(item).find('description').text().lastIndexOf(">") + 1).trim(),
//             },
//             pubDate: $(item).find('pubDate').text().trim(),
//           })
//         })
//       }
//     }
//     return data;
//   }

  // getListVipNews(): any[] {
  //   const ajax = new XMLHttpRequest();
  //   let data: any[] = [];
  //   // ajax.timeout = 3000;
  //   const url = `${this.corsAnywhere}/${this.server}`;
  //   const asyns = true;
  //   const method = "GET";
  //   ajax.open(method, url, asyns);
  //   ajax.send();
  //   // @ts-ignore
  //   ajax.onreadystatechange = function () {
  //     if (this.readyState === 4 && this.status === 200) {
  //       const $ = cheerio.load(this.responseText);
  //       $('.boxcatepay ul li').each((i, item) => {
  //         // @ts-ignore
  //         data.push({
  //           id: i,
  //           title: $(item).find('a').attr('title'),
  //           link: $(item).find('a').attr('href'),
  //           urlImg: $(item).find('a > img').attr('src')
  //         });
  //       })
  //       // console.log(data);
  //     }
  //   }
  //   return data;
  // }


  getListVipNews(): Observable<INews[]> {
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
              alt: $(item).find('a > img').attr('alt')
            }
          });
        })
      }
    }
    return of(data).pipe(delay(50));
  }


  // getListSubNews(): INews[] {
  //   const ajax = new XMLHttpRequest();
  //   let data: any[] = [];
  //   // ajax.timeout = 3000;
  //   const url = `${this.corsAnywhere}/${this.server}`;
  //   const asyns = true;
  //   const method = "GET";
  //   ajax.open(method, url, asyns);
  //   ajax.send();
  //   // @ts-ignore
  //   ajax.onreadystatechange = function () {
  //     if (this.readyState === 4 && this.status === 200) {
  //       const $ = cheerio.load(this.responseText);
  //       $('.news-horizontal-item > a').each((i, item) => {
  //         // @ts-ignore
  //         data.push({
  //           id: i,
  //           title: $(item).attr('title'),
  //           link: $(item).attr('href'),
  //           urlImg: $(item).find('img').attr('src') ? $(item).find('img').attr('src') : $(item).find('video').attr('poster')
  //         });
  //       })
  //     }
  //   }
  //   return data;
  // }

  // getMultimedia(): any {
  //   const ajax = new XMLHttpRequest();
  //   let data: any = {};
  //   // ajax.timeout = 3000;
  //   const url = `${this.corsAnywhere}/${this.server}`;
  //   const asyns = true;
  //   const method = "GET";
  //   ajax.open(method, url, asyns);
  //   ajax.send();
  //   // @ts-ignore
  //   ajax.onreadystatechange = function () {
  //     if (this.readyState === 4 && this.status === 200) {
  //       const $ = cheerio.load(this.responseText);
  //       let mainNews = $('.box-media .main-news');
  //       data.mainNews = {
  //         id: "main",
  //         title: $(mainNews).find('a').attr('title'),
  //         link: $(mainNews).find('a').attr('href'),
  //         urlImg: $(mainNews).find('a > img').attr('src') ? $(mainNews).find('a > img').attr('src') : $(mainNews).find('a > video').attr('poster')
  //       }
  //
  //       data.listSubNews = []
  //       $('.box-media .news-item').each((i, item) => {
  //         // @ts-ignore
  //         data.listSubNews.push(
  //           {
  //             id: i,
  //             title: $(item).find('a').attr('title'),
  //             link: $(item).find('a').attr('href'),
  //             urlImg: $(item).find('a > img').attr('src') ? $(item).find('a > img').attr('src') : $(item).find('a > video').attr('poster')
  //           }
  //         )
  //       })
  //     }
  //   }
  //   return data;
  // }

  // getListSubContent(): any[] {
  //   const ajax = new XMLHttpRequest();
  //   let data: any[] = [];
  //   // ajax.timeout = 3000;
  //   const url = `${this.corsAnywhere}/${this.server}`;
  //   const asyns = true;
  //   const method = "GET";
  //   ajax.open(method, url, asyns);
  //   ajax.send();
  //   // @ts-ignore
  //   ajax.onreadystatechange = function () {
  //     if (this.readyState === 4 && this.status === 200) {
  //       const $ = cheerio.load(this.responseText);
  //       $('.box-home-ngang .box-home-ngang-sub').each((i, item) => {
  //         // @ts-ignore
  //         data.push({
  //           id: i,
  //           header: $(item).find(".box-hom-ngang-sub-title > i").css('background-image'),
  //           headerLink: $(item).find(".box-hom-ngang-sub-title").attr("href"),
  //           title: $(item).find(".box-hom-ngang-sub-content-title").attr("title"),
  //           link: $(item).attr('href'),
  //           url: $(item).find(".box-hom-ngang-sub-content-thumb").find('img').attr('src')
  //         });
  //       })
  //     }
  //   }
  //   return data;
  // }
  // testRxJS() {
  //
  // }
  changeUrlPattern(url: string): string {
    let pattern: string = "https://nld.com.vn";
    if (url.startsWith(pattern)) {
      return url.replace(pattern, "");
    } else {
      return url;
    }
  }

}
