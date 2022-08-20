import { Injectable } from '@angular/core';
import {AuthConfig, OAuthService} from "angular-oauth2-oidc";
import {Subject} from "rxjs";
import {Router} from "@angular/router";

const oAuthConfig: AuthConfig = {
  issuer:'https://accounts.google.com',
  strictDiscoveryDocumentValidation:false,
  redirectUri:window.location.origin,
  clientId: '673998932925-t5a5tat8u3f03886mbqqi8tlhguul6eb.apps.googleusercontent.com',
  scope: 'openid profile email'
}
export  interface UserInfo {
  info: {
    sub:string,
    email:string,
    name:string,
    picture:string,
  }
}

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {
  userProfileSubject = new Subject<UserInfo>();
  //@ts-ignore;
  isLoggedIn:boolean;
  constructor(private readonly oAuthService: OAuthService, private router: Router ) {

  }
  singIn(){
    this.oAuthService.configure(oAuthConfig)
    this.oAuthService.logoutUrl = 'https://www.google.com/accounts/Logout'
    this.oAuthService.loadDiscoveryDocument().then(()=> {
      this.oAuthService.tryLoginImplicitFlow().then(()=> {
        if(! this.oAuthService.hasValidAccessToken()) {
         this.oAuthService.initLoginFlow();
        }else {
          this.oAuthService.loadUserProfile().then((userProfile)=> {
            this.userProfileSubject.next(userProfile as UserInfo)
          })
        }
      })
    })
  }
  isLogginIn():boolean {
    return this.oAuthService.hasValidAccessToken();
  }
  signOut(){
    this.oAuthService.logOut();
  }
}
