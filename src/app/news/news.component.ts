import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsserviceService } from './newsservice.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { formatDate } from '@angular/common';


@Component({ 
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})


export class NewsComponent implements OnInit, OnDestroy{
  dropList : any = [];
  private news : any = [];
  source : string;
  datePickerDate : string;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date();
  selectedDate = new Date();
  topic = "";

  constructor(private http: HttpClient , private newsService : NewsserviceService ) { }

  ngOnInit() {
    this.getNews();
  }

  getNews(){ 
    this.newsService.getNewsList().subscribe((data:{})=>{
      this.news = data;
      this.dropList = data;
    });     
  }

  getUsingSource(source : string){  
   this.newsService.getNewFromSource(source).subscribe((data:{}) => {
      this.news = data;
    });
  }

  selectDate(type : string , event : MatDatepickerInputEvent<Date>) {
    let formattedDate = formatDate(event.value, 'yyyy-MM-dd', 'en-US', '+0530');
     this.newsService.getNewsFromDate(formattedDate, this.topic).subscribe((data:{}) => {
        this.news = data;
        //console.log(this.news);
    });
  }

  ngOnDestroy(): void {

  }
}
