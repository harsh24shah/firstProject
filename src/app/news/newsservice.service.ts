import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class NewsserviceService {

  jstoday = '';
  Api = 'd0abda1a27bb4f03a4004ce278ca647f';
  country = '&country=us';
  pageSize = '&pageSize=50';
  popuplar = '&sortBy=popularity';
  NewsApi = 'https://newsapi.org/v2/top-headlines?apiKey=' + this.Api + this.pageSize;
  NewsEverything = 'https://newsapi.org/v2/everything?apiKey=' + this.Api;

  constructor(private http: HttpClient) {
    let today = new Date();
    this.jstoday = formatDate(today, 'yyyy-MM-dd', 'en-US', '+0530');
  }

  private extractData(res: Response) {
    let body = res;
    //  console.log(body);
    return body || {};
  }

  getSources(): Observable<any> {
    return this.http.get("https://newsapi.org/v2/sources?apiKey=d0abda1a27bb4f03a4004ce278ca647f")
      .pipe(map(this.extractData));
  }

  getNewsList(): Observable<any> {
    let letNormalNewsList = this.NewsApi + this.country;
    return this.http.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=d0abda1a27bb4f03a4004ce278ca647f")
      .pipe(map(this.extractData));
  }

  getPopularNewsList(): Observable<any> {
    return this.http.get('https://newsapi.org/v2/everything?q=*&to=' + this.jstoday + '&sortBy=popularity&apiKey=d0abda1a27bb4f03a4004ce278ca647f')
      .pipe(map(this.extractData));
  }

  getEveryNewsList(): Observable<any> {
    let letEveryNewsList = this.NewsEverything;
    return this.http.get(letEveryNewsList)
      .pipe(map(this.extractData));
  }

  getNewFromSource(source: string): Observable<any> {
    let bysource = 'https://newsapi.org/v2/top-headlines?apiKey=d0abda1a27bb4f03a4004ce278ca647f' + '&sources=' + source + this.pageSize;
    return this.http.get(bysource)
      .pipe(map(this.extractData));
  }

  getNewsFromDate(formattedDate: string, topic: string): Observable<any> {
    topic = (topic == '') ? '*' : topic;
    console.log(topic);
    let FormatedDateNewsApi = this.NewsEverything + '&from=' + formattedDate + '&to=' + formattedDate + '&q=' + topic + '&sortBy=relevancy' + this.pageSize;

    return this.http.get(FormatedDateNewsApi)
      .pipe(map(this.extractData));
  }
}
