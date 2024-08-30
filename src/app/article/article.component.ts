import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent{

  articles:any[]=[]

  constructor(private dataService:DataService) {
    this.loadArticles()
   }

  loadArticles(){
    this.dataService.getData('https://jsonplaceholder.typicode.com/posts').subscribe((data:any)=>{
      this.articles = data;
    })   
  }

  articles1(){
  this.articles = []
  }
}
