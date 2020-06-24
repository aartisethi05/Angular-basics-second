import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {emp} from './employee';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
   private url= "/assets/employees.json";

  constructor(private hc:HttpClient) { }

  getEmployees():Observable<any>{
     return this.hc.get(this.url);
  }
}
