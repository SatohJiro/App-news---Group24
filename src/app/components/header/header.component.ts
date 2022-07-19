import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public datas = [
  {title:'',path:"",desc:""},
  {title: "Trong nước", path:"news",desc:"lorem"},
  {title: "Quốc tế", path:"news-international",desc:"lorem"},
];
  constructor() { }

  ngOnInit(): void {
  }

}
