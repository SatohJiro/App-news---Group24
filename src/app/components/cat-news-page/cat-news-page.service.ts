import {Injectable} from '@angular/core';
import * as cheerio from "cheerio";
import {BehaviorSubject, delay, Observable, of, shareReplay, switchMap} from "rxjs";
import {INews} from "../news/news";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CatNewsPageService {
  server = 'https://nld.com.vn';
  option = 'thoi-su.htm';
  rss= 'thoi-su.rss'
  corsAnywhere = 'https://mycorsproxy01.herokuapp.com';
  private _subCateList$ = new BehaviorSubject<void>(undefined);
  //@ts-ignore
  // paramMap.get('RSS')}${this.option
  public apiSubCateListRequest$ = this.http.get<any>(`${this.corsAnywhere}/${this.server}/${this.option}`,{responseType: 'text'}).pipe(
    //@ts-ignore
    switchMap(data => this.loadSubCateList(data))
  )
  public subCateList$ = this._subCateList$.pipe(switchMap(()=> this.apiSubCateListRequest$),shareReplay(1))

  private _focusNews$ = new BehaviorSubject<void>(undefined);
  //@ts-ignore
  public apiFocusNewsRequest$ = this.http.get<any>(`${this.corsAnywhere}/${this.server}/${this.option}`,{responseType: 'text'}).pipe(
    //@ts-ignore
    switchMap(data => this.loadFocusNews(data))
  )
  public focusNews$ = this._focusNews$.pipe(switchMap(()=> this.apiFocusNewsRequest$),shareReplay(1))


  private _listNews$ = new BehaviorSubject<void>(undefined);
  //@ts-ignore
  public apiListNewsRequest$ = this.http.get<any>(`${this.corsAnywhere}/${this.server}/${this.option}`,{responseType: 'text'}).pipe(
    //@ts-ignore
    switchMap(data => this.loadListNews(data))
  )
  public listNews$ = this._listNews$.pipe(switchMap(()=> this.apiListNewsRequest$),shareReplay(1))


  private _listNoiBatNews$ = new BehaviorSubject<void>(undefined);
  //@ts-ignore
  public apiListNoiBatNewsRequest$ = this.http.get<any>(`${this.corsAnywhere}/${this.server}/${this.option}`,{responseType: 'text'}).pipe(
    //@ts-ignore
    switchMap(data => this.loadListNoiBatNews(data))
  )
  public listNoiBatNews$ = this._listNoiBatNews$.pipe(switchMap(()=> this.apiListNoiBatNewsRequest$),shareReplay(1))

  private _listXemNhieuNhatNews$ = new BehaviorSubject<void>(undefined);
  //@ts-ignore
  public apiListXemNhieuNhatNewsRequest$ = this.http.get<any>(`${this.corsAnywhere}/${this.server}/${this.option}`,{responseType: 'text'}).pipe(
    //@ts-ignore
    switchMap(data => this.loadListXemNhieuNhatNews(data))
  )
  public listXemNhieuNhatNews$ = this._listXemNhieuNhatNews$.pipe(switchMap(()=> this.apiListXemNhieuNhatNewsRequest$),shareReplay(1))

  constructor(private http: HttpClient, private activateRoute: ActivatedRoute) { }

  loadListNoiBatNews(text:string) {
    const $ = cheerio.load(text);
    let data:any[] =[] ;
    $('.box-video > .list-video > li').slice(0,3).each((i, news) => {
      // @ts-ignore
      data.push({
        title: $(news).find('.img216x133').attr("title"),
        //@ts-ignore
        link: this.changeUrlPattern($(news).find('a.img216x133').attr("href")),
        imgUrl: $(news).find('img.img216x133').attr('src'),
        imgAlt: $(news).find('img.img216x133').attr('alt'),
      });
    })
    return of(data).pipe(delay(50))
  }
  loadListXemNhieuNhatNews(text:string) {
    const $ = cheerio.load(text);
    let data:any[] =[] ;
    $('.box-video.mg_t22 > .list-video > li').each((i, news) => {
      // @ts-ignore
      data.push({
        title: $(news).find('.img216x133').attr("title"),
        //@ts-ignore
        link: this.changeUrlPattern($(news).find('a.img216x133').attr("href")),
        imgUrl: $(news).find('a.img216x133').attr('src'),
        imgAlt: $(news).find('a.img216x133').attr('alt'),
      });
    })
    return of(data).pipe(delay(50))
  }
  loadListNews(text:string) {
    const getImg = (text: string) => {
      const $ = cheerio.load(text, {xmlMode: true});
      return $('img');
    }
    const $ = cheerio.load(text,{xmlMode:true});
    let data:any[] = [];
    $('.news-item').each((i, news) => {
      // @ts-ignore
      data.push({
        id: $(news).attr('data-newsid'),
        title: $(news).find('.img220x139').attr("title"),
        // @ts-ignore
        link: this.changeUrlPattern($(news).find('.img220x139').attr("href")),
        description: {
          imgUrl: $(news).find('.img220x139 > img').attr('src') ? $(news).find('.img220x139 > img').attr('src') : $(news).find('.img220x139 > video').attr('poster'),
          alt: $(news).find('.img220x139 > img').attr('alt'),
        },
        infor: {
          title1: $(news).find('.news-info ul li:first-of-type > a').attr('title'),
          // @ts-ignore
          link1: this.changeUrlPattern($(news).find('.news-info ul li:first-of-type > a').attr('href')),
          title2: $(news).find('.news-info ul li:last-of-type > a').attr('title'),
          // @ts-ignore
          link2: this.changeUrlPattern($(news).find('.news-info ul li:last-of-type > a').attr('href')),
        }
      });
    })
    return of(data).pipe(delay(50))
  }
  loadFocusNews(text:string) {
    const $ = cheerio.load(text);
    let data:any[] =[] ;
    $('.box-cate-focus').each((i, news) => {
      // @ts-ignore
      data.push({
        title: $(news).find('h3 >a').attr("title"),
        //@ts-ignore
        link: this.changeUrlPattern($(news).find('h3 >a').attr("href")),
        sapo: $(news).find('p.sapo').text(),
        imgUrl: $(news).find('img.img435x273').attr('src'),
        imgAlt: $(news).find('img.img435x273').attr('alt'),
      });
    })
    return of(data).pipe(delay(50))
  }
loadSubCateList(text:string){
  const $ = cheerio.load(text);
  let data:any[] =[] ;
    $('.sub-cate li a').each((i, cate) => {
    // @ts-ignore
    data.push({
      title: $(cate).attr("title"),
      //@ts-ignore
      link: this.changeUrlPattern($(cate).attr("href")),
    });
  })
  return of(data).pipe(delay(50))
}
  changeUrlPattern(url: string): string {
    // let pattern: string = "https://nld.com.vn";
    // if (url.startsWith(pattern)) {
    //   return url.replace(pattern, "");
    // }else{
      return url;
    // }
  }
}
