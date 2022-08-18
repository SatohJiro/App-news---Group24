import {Component, Input, OnInit} from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import {ParentData} from "../../services/parent-data";
import {DetailData} from "../../services/detail-data";
import {BoxNewsDetailService} from "./box-news-detail.service";

@Component({
  selector: 'app-box-news-detail',
  templateUrl: './box-news-detail.component.html',
  styleUrls: ['./box-news-detail.component.scss']
})
export class BoxNewsDetailComponent implements OnInit {
  // @Input() dataParent: ParentData | null = null;
  dataPage: DetailData | null = null;

  linkPage: string | null = null;
  headerLoading: boolean = true;
  detailLoading: boolean = true;
  dataHeader: [] = [];
  dataDetail: [] = [];
  dataRelated: [] = [];
  dataFirst: any = {};
  dataSecond: any = {};
  dataListItem: any[] = [];
  dataMostViewed : any[]=[];



  constructor(private activatenRoute: ActivatedRoute, private dataParent: ParentData, private boxNewDetail: BoxNewsDetailService) {

  }


  getLinkPage() {
    this.activatenRoute.paramMap.subscribe(paramMap => {
      this.linkPage = paramMap.get('link');
    })

  }

  getDataPage(): void {
    console.log(this.linkPage);
    if (this.linkPage === null) {
      // @ts-ignore
      this.dataPage = this.dataParent.loadDataDetailPage("https://nld.com.vn/noi-thang/noi-thang-tien-o-dau-ma-ho-tiec-tung-hoanh-trang-20220814232233652.htm");
    } else { // @ts-ignore
      this.dataPage = this.dataParent.loadDataDetailPage(this.linkPage);
    }
  }


  ngOnInit(): void {
    this.getLinkPage();

    // @ts-ignore
    const checkURL: boolean = this.dataParent.checkExitsURL(this.linkPage);
    if (checkURL) {
      this.headerLoading = false;
      this.detailLoading = false;
    }
    this.getDataPage();

    // @ts-ignore
    this.dataHeader = this.dataPage.data[0][0].headerData;
    // @ts-ignore
    this.dataDetail = this.dataPage.data[1][0].detailData;
    // @ts-ignore
    this.dataRelated = this.dataPage.data[2][0].relatedData;



  }
}


