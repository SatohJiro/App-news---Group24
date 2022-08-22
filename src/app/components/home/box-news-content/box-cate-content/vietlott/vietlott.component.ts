import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../../home.service";

@Component({
  selector: 'app-vietlott',
  templateUrl: './vietlott.component.html',
  styleUrls: ['./vietlott.component.scss']
})
export class VietlottComponent implements OnInit {

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
  }

}
