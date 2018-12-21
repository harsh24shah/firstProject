import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {formatDate } from '@angular/common';
 
@Injectable({
  providedIn: 'root'
})

export class NewsserviceService {
  today= new Date();
  jstoday = '';
 
  private extractData(res: Response) {
    let body = res; 
    return body || { };
  }
 
  Api = 'd0abda1a27bb4f03a4004ce278ca647f';

  constructor(private http: HttpClient) {
    this.jstoday = formatDate(this.today, 'yyyy-MM-dd', 'en-US', '+0530');
   }

   getNewsList() : Observable<any>{
     console.log(this.jstoday);
    return this.http.get('https://newsapi.org/v2/everything?q=bitcoin&from='+this.jstoday+'&sortBy=publishedAt&apiKey='+this.Api)
    .pipe( map(this.extractData));  
   
  }  
} 
 