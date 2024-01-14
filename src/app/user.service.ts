import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private jwtHelperService: JwtHelperService) { }

  list() {
    return this.http.get(environment.cricket.baseUrl + 'users');
  }

  add(body = {}) {
    return this.http.post(environment.cricket.baseUrl + 'users', body);
  }

  delete(id: number) {
    return this.http.delete(environment.cricket.baseUrl + 'users/' + id);
  }

  login(email: string, password: string) {
    return this.http.post(environment.cricket.baseUrl + 'login', {
      email,
      password
    });
  }

  hasPermission() {
    let token = localStorage.getItem('token') || '';
    let decodedToken = this.jwtHelperService.decodeToken(token);

    if (!decodedToken) {
      return false;
    }

    return decodedToken.role === 'admin';
  }
}
