import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsserviceService } from './newsservice.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { formatDate } from '@angular/common';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})


export class NewsComponent implements OnInit, OnDestroy {
  private sourcesList: any = [];
  private news: any = [];
  private PopularNews: any = [];
  private source: string;
  private newsSubscription: Subscription;
  private PopularNewsSubscription: Subscription;
  private newsUsingSource: Subscription;
  private newsSelectDate: Subscription;
  private popuplarNewsUsingSource: Subscription;
  loading: boolean = false;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date();
  topic = "";

  constructor(private http: HttpClient, private newsService: NewsserviceService) { }

  ngOnInit() {
    this.getNews();
    this.getPopularNews();
    this.getSources();
  }

  getNews() {
    this.newsSubscription = this.newsService.getNewsList().subscribe((data: {}) => {
      this.news = data;
    });
  }

  getPopularNews() {
    this.PopularNewsSubscription = this.newsService.getPopularNewsList().subscribe((data: {}) => {
      this.PopularNews = data;
    })
  }

  getSources() {
    this.newsSubscription = this.newsService.getSources().subscribe((data: {}) => {
      this.sourcesList = data;
    });
  }

  getUsingSource(source: string) {
    this.newsUsingSource = this.newsService.getNewFromSource(source).subscribe((data: {}) => {
      this.news = data;
    });
  }

  selectDate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.loading = true;
    let formattedDate = formatDate(event.value, 'yyyy-MM-dd', 'en-US', '+0530');
    this.newsSelectDate = this.newsService.getNewsFromDate(formattedDate, this.topic).subscribe((data: {}) => {
      this.news = data;
      //console.log(this.news);
    });
    this.loading = false;
  }

  ngOnDestroy(): void {
    //this.newsSubscription.unsubscribe();
    // this.newsUsingSource.unsubscribe();
    //this.newsSelectDate.unsubscribe();
  }
}
