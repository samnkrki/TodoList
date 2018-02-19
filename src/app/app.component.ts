import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MediaMatcher } from '@angular/cdk/layout';

import { Router } from '@angular/router';
import { AuthService, User } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public user: any = new User({});

  public isLoggedin: boolean = false;

  constructor(public router: Router, public authService: AuthService, ) {
    this.authService.userDataChanged$
      .subscribe(data => {
        // call function 
        this.checkLoginData();
      });

  }

  ngOnInit() {
    this.checkLoginData();
  }

  checkLoginData() {

    if (this.authService.isLoggedIn()) {
      this.isLoggedin = true;
      this.user = this.authService.getUser();
    } else {
      this.isLoggedin = false;
      this.user = new User({});
    }
  }

  login() {
    this.router.navigate(['login']);
  }


  register() {
    this.router.navigate(['register']);
  }

  logout() {
    this.authService.logout();
    this.authService.publishUserDataChange();
  }
}
