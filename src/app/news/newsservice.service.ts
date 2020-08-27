import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import { environment } from '../../environments/environment';
const basUrl = environment.baseApi;
const popularUrl = environment.basePopularApi;

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class NewsserviceService {

  jstoday = '';
  // https://api.nytimes.com/svc/topstories/v2/home.json?
  // https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=yourkey
  // https://api.nytimes.com/svc/topstories/v2/home.json?api-key=yourkey
  // https://api.nytimes.com/svc/topstories/v2/science.json?api-key=yourkey
  // https://api.nytimes.com/svc/topstories/v2/us.json?api-key=yourkey
  // https://api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey
  Api = 'api-key=lbvRXlKElfGk6xGAefgcM1iI4eJjg0Bg';
 
  constructor(private http: HttpClient) {
    let today = new Date();
    this.jstoday = formatDate(today, 'yyyy-MM-dd', 'en-US', '+0530');
  }

  private extractData(res: Response) {
    let body = res;
    //  console.log(body);
    return body || {};
  }

  getNewsList(): Observable<any> {
    return this.http.get(basUrl + "/home.json?" + this.Api)
      .pipe(map(this.extractData));
  }

  getNewFromSource(source: string): Observable<any> {
    let bysource = basUrl + source + ".json?" + this.Api;
    return this.http.get(bysource)
      .pipe(map(this.extractData));
  }

  getPopularNewsList(): Observable<any> {
    return this.http.get(popularUrl + "shared/7.json?" + this.Api) // emailed, shared, viewed
      .pipe(map(this.extractData));
  }

  searchTopicNews(topic: string): Observable<any> {
    return this.http.get(basUrl + "articlesearch.json?q=" + topic + "&" + this.Api)
      .pipe(map(this.extractData));
  }
}
