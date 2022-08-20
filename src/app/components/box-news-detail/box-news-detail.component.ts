import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";

import {ParentData} from "../../services/parent-data";
import {DetailData} from "../../services/detail-data";

@Component({
  selector: 'app-box-news-detail',
  templateUrl: './box-news-detail.component.html',
  styleUrls: ['./box-news-detail.component.scss']
})

export class BoxNewsDetailComponent implements OnInit {


  dataPage: DetailData | null = null;

  linkPage: string = "";
  headerLoading: boolean = true;
  detailLoading: boolean = true;

  mostViewLoading: boolean = true;
  dataHeader: [] = [];
  dataDetail: [] = [];
  dataRelated: [] = [];
  dataMostView: any[] = [];


  constructor(private activatenRoute: ActivatedRoute, private router: Router, private dataParent: ParentData) {

  }


  getLinkPage() {
    this.activatenRoute.paramMap.subscribe(paramMap => {
      this.linkPage = String(paramMap.get('link'));
    })
  }

  getDataPage(): void {
    if (this.linkPage === null) {
      // @ts-ignore
      this.dataPage = this.dataParent.loadDataDetailPage("https://nld.com.vn/noi-thang/noi-thang-tien-o-dau-ma-ho-tiec-tung-hoanh-trang-20220814232233652.htm");
    } else { // @ts-ignore
      this.dataPage = this.dataParent.loadDataDetailPage(this.linkPage);
    }
  }


  ngOnInit(): void {
    this.headerLoading = true;
    this.detailLoading = true;
    this.mostViewLoading = true;
    this.getLinkPage();

    // @ts-ignore
    const checkURL: boolean = this.dataParent.checkExitsURL(this.linkPage);
    if (checkURL) {
      this.headerLoading = false;
      this.detailLoading = false;
      this.mostViewLoading = false;

    }
    if (this.mostViewLoading) {
      setTimeout(() => {
        this.mostViewLoading = false;
      }, 7000);
    }
    this.getDataPage();

    // @ts-ignore
    this.dataHeader = this.dataPage.data[0][0].headerData;
    // @ts-ignore
    this.dataDetail = this.dataPage.data[1][0].detailData;
    // @ts-ignore
    this.dataRelated = this.dataPage.data[2][0].relatedData;
    // @ts-ignore
    this.dataMostView = this.dataPage.data[3][0].mostViewData;
    // @ts-ignore

  }

}

