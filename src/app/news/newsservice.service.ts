import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {formatDate } from '@angular/common';

 
@Injectable({
  providedIn: 'root'
})

export class NewsserviceService {
  
  jstoday = '';
  Api = 'd0abda1a27bb4f03a4004ce278ca647f'; 
  country = '&country=us';
  topHeadline = 'top-headlines';
  Everything = 'everything';
  pageSize = '&pageSize=50';
  NewsApi = 'https://newsapi.org/v2/'+this.topHeadline+'?apiKey=' + this.Api + this.pageSize;
  NewsEverything = 'https://newsapi.org/v2/'+this.Everything+'?apiKey=' + this.Api + this.pageSize;
 
  constructor(private http: HttpClient) {
    let today = new Date();
    this.jstoday = formatDate(today, 'yyyy-MM-dd', 'en-US', '+0530');
  }

  private extractData(res: Response) {
    let body = res; 
    return body || { };
  }

  getSources() : Observable<any>{
    return this.http.get(this.NewsApi)
    .pipe(map(this.extractData));    
  }

  getNewsList() : Observable<any>{ 
    let letNormalNewsList = this.NewsApi + this.country;
    return this.http.get(letNormalNewsList)
    .pipe(map(this.extractData));    
  }  

  getNewFromSource(source: string) : Observable<any>{
    let bysource = this.NewsApi + '&sources=' + source;
    return this.http.get(bysource)
    .pipe(map(this.extractData));
  }

  getNewsFromDate(formattedDate: string, topic : string) : Observable<any>{
    console.log(topic);
    if(topic == null || topic == ''){
      topic = '*';
    }
    let FormatedDateNewsApi = this.NewsEverything + '&from=' + formattedDate + '&to=' + formattedDate + '&q='+topic;
    console.log(FormatedDateNewsApi);
    return this.http.get(FormatedDateNewsApi)
    .pipe(map(this.extractData));
  }
} 
 