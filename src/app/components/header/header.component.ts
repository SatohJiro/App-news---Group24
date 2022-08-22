import {Component, Inject, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {ServerService} from "../../services/server.service";
import {fromEvent, throttleTime} from "rxjs";
import {GoogleApiService} from "../login/google-api.service";
import {Router} from "@angular/router";
import {SocialAuthService} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  enableSticky: boolean = false;
  topics: any[] = [];
  isLoggin: boolean = true;
  //@ts-ignore
  userInfo: any;
  @Input() isMenuTop = true;
  public datas = [
    {title: '', path: "", desc: ""},
    {title: "Trong nước", path: "news", desc: "lorem"},
    {title: "Quốc tế", path: "news-international", desc: "lorem"},
  ];
  //@ts-ignore
  user: any;
  //@ts-ignore
  loggedIn: boolean;

  // @ts-ignore
  constructor(@Inject(DOCUMENT) document: Document, private service: ServerService, private readonly googleService: GoogleApiService, private router: Router, public socialAuthService: SocialAuthService) {

  }

  ngOnInit(): void {
    this.service.getTopics().subscribe(data => this.topics = data);
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });

    fromEvent(window, "scroll").pipe(throttleTime(150)).subscribe((event) => {
      // @ts-ignore
      const header = document.querySelector(".header__menu");
      // @ts-ignore
      header.classList.toggle("enable-sticky", window.scrollY > document.querySelector(".header__content").clientHeight);
    })
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  isLoggedIn(): boolean {
    return this.googleService.isLogginIn();
  }

  logout() {
    this.socialAuthService.signOut();
    // localStorage.removeItem("userInfor");
    // this.router.navigateByUrl('/')
    // this.googleService.signOut();
  }

}
