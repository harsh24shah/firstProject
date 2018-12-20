import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCallService } from './apicall.service';

@Component({
  selector: 'app-apicall',
  templateUrl: './apicall.component.html',
  styleUrls: ['./apicall.component.scss']
})
export class ApicallComponent implements OnInit {
  private News = [];
  private productsObservable : Observable<any[]> ; 

  constructor(private dataservice: ApiCallService) { }

    configUrl = 'assets/config.json';

    getNews() {
      return this.dataservice.getNews();
    }

  ngOnInit() {
  }

 

}
