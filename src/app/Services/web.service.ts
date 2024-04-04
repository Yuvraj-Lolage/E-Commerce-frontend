import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WebService {
  readonly ROOT_URL;
  constructor(private http:HttpClient) {
    this.ROOT_URL = "http://localhost:3000";
  }

  /**
   * HTTP GET request
   */
  get(path: string){
    return this.http.get(`${ this.ROOT_URL }/${ path }`);
  }

  /**
   * HTTP POST request
   */
  post(path:string, payload:object){
    return this.http.post(`${ this.ROOT_URL }/${ path }`, payload);
  }

  /**
   * HTTP DELETE request
   */
  delete(path:string){
    return this.http.delete(`${ this.ROOT_URL }/${ path }`);
  }
}
