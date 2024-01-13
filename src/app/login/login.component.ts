import { Component, OnInit } from '@angular/core';

import { JwtHelperService } from '@auth0/angular-jwt';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private jwtHelper: JwtHelperService) { }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/subpanel']);
    }
  }

  login(loginForm: NgForm) {
    this.userService.login(loginForm.value.email, loginForm.value.password).subscribe((response: any) => {
      let decodedToken = this.jwtHelper.decodeToken(response.access_token);

      if (decodedToken.role !== 'admin') {
        this.router.navigate(['/']);
        return;
      } else {
        localStorage.setItem('token', response.access_token);
        this.router.navigate(['/subpanel']);
      }
    });
  }
}
