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
  maxDate = new Date();
  minDate = new Date();
  categoriesString = "arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, t-magazine, travel, upshot, us, world";
  categories;

  topic = "";

  constructor(private http: HttpClient, private newsService: NewsserviceService) {
    this.minDate.setMonth(this.maxDate.getMonth() - 1);
  }

  ngOnInit() {
    this.getNews();
    this.categories = this.categoriesString.split(', ');
    this.getPopularNews();

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

  getUsingSource(source: string) {
    this.loading = true;
    this.newsUsingSource = this.newsService.getNewFromSource(source).subscribe((data: {}) => {
      this.news = data;
      this.loading = false;
    });

  }

  // selectDate(type: string, event: MatDatepickerInputEvent<Date>) {
  //   this.loading = true;
  //   let formattedDate = formatDate(event.value, 'yyyy-MM-dd', 'en-US', '+0530');
  //   this.newsSelectDate = this.newsService.searchTopicNews(formattedDate, this.topic).subscribe((data: {}) => {
  //     this.news = data;
  //     //console.log(this.news);
  //   });
  //   this.loading = false;
  // }

  searchNews(type: string) {
    this.loading = true;

    // let formattedDate = formatDate(event.value, 'yyyy-MM-dd', 'en-US', '+0530');
    this.newsSelectDate = this.newsService.searchTopicNews(this.topic).subscribe((data: {}) => {
      this.news = data;
      console.log(this.news);
    });
    this.loading = false;
  }

  ngOnDestroy(): void {
    //this.newsSubscription.unsubscribe();
    // this.newsUsingSource.unsubscribe();
    //this.newsSelectDate.unsubscribe();
  }
}
