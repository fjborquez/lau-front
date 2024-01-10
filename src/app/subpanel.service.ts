import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubpanelService {

  constructor(private http: HttpClient) { }

  getSubpanels() {
    // TODO: Url en variables de entorno
    return this.http.get('http://cricket-api.test/api/subpaneles');
  }
}
