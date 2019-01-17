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
  Api = 'd0abda1a27bb4f03a4004ce278ca647f'; 
  bysource = '';

  private extractData(res: Response) {
    let body = res; 
    return body || { };
  }
 
  allNews = 'https://newsapi.org/v2/top-headlines?country=us&apiKey='+this.Api;

  constructor(private http: HttpClient) {
    this.jstoday = formatDate(this.today, 'yyyy-MM-dd', 'en-US', '+0530');
  }

  getSources() : Observable<any>{
    return this.http.get(this.allNews)
    .pipe(map(this.extractData));    
  }

  getNewsList() : Observable<any>{ 
     //console.log(this.jstoday); 
    return this.http.get(this.allNews)
    .pipe(map(this.extractData));    
  }  

  getNewFromSource(source: string) : Observable<any>{
    this.bysource = ' https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.Api;
    //console.log(this.bysource);
    return this.http.get(this.bysource).pipe(map(this.extractData));
  }
} 
 