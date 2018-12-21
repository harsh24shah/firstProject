import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsserviceService } from './newsservice.service';



@Component({ 
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})


export class NewsComponent implements OnInit {

  news: any = [];
  

  constructor(private http: HttpClient,private newsService : NewsserviceService ) { }

  ngOnInit() {
    this.getNews();
  }

  getNews(){ 
     this.newsService.getNewsList().subscribe((data:{})=>{
      this.news = data;
    });
    
  }
}
