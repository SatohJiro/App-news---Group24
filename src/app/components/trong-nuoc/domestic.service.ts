import {Injectable} from '@angular/core';
import {HomeService} from "../home/home.service";

@Injectable({
  providedIn: 'root'
})
export class DomesticService {
  server = 'https://nld.com.vn';
  option = 'tin-moi-nhat.rss';
  corsAnywhere = 'https://mycorsproxy01.herokuapp.com';

  constructor(private homeService: HomeService) {

  }
}
