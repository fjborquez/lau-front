import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubpanelService {

  constructor(private http: HttpClient) { }

  getSubpanels() {
    return this.http.get(environment.cricket.baseUrl + 'subpaneles');
  }

  addSubpanels(body = {}) {
    return this.http.post(environment.cricket.baseUrl + 'subpaneles', body);
  }
}
