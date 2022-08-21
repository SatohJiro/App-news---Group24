import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormGroup,FormBuilder,Validators} from "@angular/forms";
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService,SocialUser} from "@abacritt/angularx-social-login";
import {GoogleApiService, UserInfo} from "./google-api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() loggedInEvent = new EventEmitter<any>();
  public loggedIn: boolean = false;
  public user:any = {};
  constructor(private authService:SocialAuthService,private route:Router) {
  }
  ngOnInit() {
    this.authService.authState.subscribe((user)=> {
      this.user = user;
      this.loggedIn = user != null
      this.route.navigateByUrl("/");
    })
  }
  signInWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
