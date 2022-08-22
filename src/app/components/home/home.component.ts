import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ServerService} from "../../services/server.service";
import {HomeService} from "./home.service";
import {BehaviorSubject, delay} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  isLoading: boolean = true;
  isLoadingTop: boolean = true;
  // @ts-ignore
  dateTime: Date = new Date();
  dataHome: any = {};
   // public test$ = this.homeService.players$;
  public listHotNews$ = this.homeService.listHotNews$;
  public tagsHotNews$ = this.homeService.tagsHotNews$
  public listNews$ = this.homeService.listNews$
  public rowListNews$ = this.homeService.rowListNews$
  public boxListNews$ = this.homeService.boxListNews$
  public noiThangNews$ = this.homeService.noiThangNews$
  public docQuyenNews$ = this.homeService.docQuyenNews$
  public hoiNongDapNhanhNews$ = this.homeService.hoiNongDapNhanhNews$
  public truyVetMangXaHoiNews$ = this.homeService.truyVetMangXaHoiNews$
  public gocNhinNews$ = this.homeService.gocNhinNews$
  public listMostViewedNews$ =this.homeService.listMostViewedNews$

  constructor(private homeService: HomeService, private serverService: ServerService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    // this.homeService.players$.subscribe(data => console.log(data));
    // this.data = this.homeService.getData('tin-moi-nhat.rss');
    // this.homeService.getHotNewsTags().subscribe(data => this.dataHome.tags = data);
    // this.homeService.getListHotNews().subscribe(data => this.dataHome.listHotNews = data);
    // this.homeService.getListNews('tin-moi-nhat.rss').subscribe(data => this.dataHome.listNews = data);
    // this.homeService.getListNewsRow().subscribe(data => this.dataHome.listNewsRow = data);
    // this.homeService.getBoxNewsList().subscribe(data => this.dataHome.boxNewsList1 = data);
    // this.homeService.getNewsNoiThang().subscribe(data => this.dataHome.noithang = data);
    // this.homeService.getNewsDocQuyen().subscribe(data => this.dataHome.docquyen = data);
    // this.homeService.getHoiNongDapNhanh().subscribe(data => this.dataHome.hoinongdapnhanh = data);
    // this.homeService.getTruyVetMangXaHoi().subscribe(data => this.dataHome.truyvetmangxahoi = data);
    // this.homeService.getGocNhin().subscribe(data => this.dataHome.gocnhin = data);
    // this.homeService.getBoxMostViewed().subscribe(data => this.dataHome.xemnhieu = data);


    setTimeout(() => {
      this.isLoading = false;
      this.isLoadingTop = false;
    }, 1000);
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {

  }
}
