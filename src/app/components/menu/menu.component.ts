import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {ServerService} from "../../services/server.service";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  datas:any[] = [];
  @Input() isMenuTop = true;
  // @ts-ignore
  constructor(private serverService: ServerService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.datas =  this.serverService.getMenuData();
  }

}
