import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() loggedInEvent = new EventEmitter<any>();
  public loggedIn: boolean = false;
  public user: any = {};

  constructor(private authService: SocialAuthService, private route: Router) {
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null
      this.route.navigateByUrl("/");
    })
  }

  signInWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFb() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
}
