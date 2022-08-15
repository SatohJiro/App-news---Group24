import { Component, OnInit } from '@angular/core';
import {ServerService} from "../../services/server.service";

@Component({
  selector: 'app-advertisment',
  templateUrl: './advertisment.component.html',
  styleUrls: ['./advertisment.component.scss']
})
export class AdvertismentComponent implements OnInit {

  constructor(private http: ServerService) { }

  ngOnInit(): void {

  }

}
