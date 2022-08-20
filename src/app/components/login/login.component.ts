import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormGroup,FormBuilder,Validators} from "@angular/forms";
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService,SocialUser} from "@abacritt/angularx-social-login";
import {GoogleApiService, UserInfo} from "./google-api.service";
const fbLoginOptions = {
  scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages',
  return_scopes: true,
  enable_profile_selector: true
};
const googleLoginOptions = {
  scope: 'profile email'
};
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //@ts-ignore
  signinForm: FormGroup;
  //@ts-ignore
  // user: SocialUser;
  //@ts-ignore
  userInfo: SocialUser;
  //@ts-ignore
  loggedIn: boolean;
  auth2: any;
  @ViewChild('loginRef', { static: true }) loginElement!: ElementRef;
  constructor(private route: Router, private socialAuthService: SocialAuthService,private readonly googleApi: GoogleApiService) {

  }
  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.userInfo = user;
      this.loggedIn = (user != null);
    });
  }


  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID,googleLoginOptions);
  }

  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID,fbLoginOptions);
  }

  signOut(): void {
    this.socialAuthService.signOut();
  }
  refreshToken(): void {
    this.socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

}
