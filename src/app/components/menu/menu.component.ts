import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {ServerService} from "../../services/server.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() isMenuTop = true;

  trongNuoc:string="thoi-su.rss";
  quocTe:string="thoi-su-quoc-te.rss";
  congDoan:string="cong-doan.rss"
  banDoc:string="ban-doc.rss";
  kinhTe:string="kinh-te.rss";
  sucKhoe:string="suc-khoe.rss";
  giaoDuc:string="giao-duc-khoa-hoc.rss";
  phapLuat:string="phap-luat.rss";
  vanNghe:string="van-nghe.rss";
  giaiTri:string="giai-tri.rss";
  theThao: string ="the-thao.rss";
  congNghe: string ="cong-nghe.rss";
  duLichXanh: string ="du-lich-xanh.rss";
  phuNu: string ="phunu.rss";
  diaOc: string= "diaoc.rss";

  // @ts-ignore
  constructor(private serverService: ServerService,private route: Router) {
  }

  ngOnInit(): void {

  }
  active(){
    const searchInputElement =document.querySelector('.search__input') as HTMLInputElement;
    let valueOfSearchInput  = searchInputElement.value;
    //@ts-ignore;
    document.querySelector('.search__btn').classList.add('active');
    //@ts-ignore;
    document.querySelector('.search__btn-cancel').classList.add('active');
    //@ts-ignore;
    searchInputElement.classList.add('active');
    if(valueOfSearchInput.trim()!=='') {
      this.route.navigate(
        ['/tim-kiem'],
        { queryParams: { keywords: `${valueOfSearchInput}` },
        }
      );
    }

  }
  unActive() {
    const searchInputElement =document.querySelector('.search__input') as HTMLInputElement;

    //@ts-ignore;
    document.querySelector('.search__btn').classList.remove('active');
    //@ts-ignore;
    document.querySelector('.search__btn-cancel').classList.remove('active');
    //@ts-ignore;
    searchInputElement.classList.remove('active');
    searchInputElement.value = '';
  }

}
