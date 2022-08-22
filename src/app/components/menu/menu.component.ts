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

  trongNuoc:string="thoi-su";
  quocTe:string="thoi-su-quoc-te";
  congDoan:string="cong-doan"
  banDoc:string="ban-doc";
  kinhTe:string="kinh-te";
  sucKhoe:string="suc-khoe";
  giaoDuc:string="giao-duc-khoa-hoc";
  phapLuat:string="phap-luat";
  vanNghe:string="van-nghe";
  giaiTri:string="giai-tri";
  theThao: string ="the-thao";
  congNghe: string ="cong-nghe";
  duLichXanh: string ="du-lich-xanh";
  phuNu: string ="phunu";
  diaOc: string= "diaoc";

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
