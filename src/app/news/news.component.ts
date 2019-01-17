import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsserviceService } from './newsservice.service';



@Component({ 
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})


export class NewsComponent implements OnInit {
  dropList : any = [];
  news: any = [];
  source : string;

  constructor(private http: HttpClient, private newsService : NewsserviceService ) { }

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
   // console.log(source); 
      this.newsService.getNewFromSource(source).subscribe((data:{})=>{
      this.news = data;
     // console.log(this.dropList);
    });
  }
}
