import {Component, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  results: string[] | undefined;
  title = 'Báo Người Lao Động';
  @Input() corsAnywhereURL:string = "https://mycorsproxy01.herokuapp.com/";
  url = "https://nld.com.vn/tin-moi-nhat.rss"
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    const _this = this;
    (function() {
      const ajax = new XMLHttpRequest();
      ajax.timeout = 3000;
      const asyns = true;
      const method = "GET";
      ajax.open(method,_this.corsAnywhereURL+_this.url, asyns);
      ajax.send();
      ajax.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          console.log(this.responseXML);
        }
      };
    })();
  }

}
