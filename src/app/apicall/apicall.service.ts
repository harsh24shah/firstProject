import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class ApiCallService {
    apikey = "d0abda1a27bb4f03a4004ce278ca647f";
    configUrl = "https://newsapi.org/v2/everything?q=bitcoin&from=2018-11-19&sortBy=publishedAt&apiKey=";

    constructor(private http:HttpClient) {}
 
    getNews() {      
        return this.http.get(this.configUrl+this.apikey);
    }

  
} 