import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-article',
  templateUrl: './food-article.component.html',
  styleUrls: ['./food-article.component.scss']
})
export class FoodArticleComponent implements OnInit {

  blogContent = {title:'', tags:'', slogan:'', posted:'',image:'', brief:{title:'', introduction:''},content: [{title:'', introduction:'',description:'', contentType:''}]};
  header={name:'', menu:[''], size: '', homepage:''};

  constructor() { }

  ngOnInit(): void {
    this.header = {
      name: "delhi's famous kulchas",
      menu: ['recipes', 'stories', 'about'],
      size: 'medium',
      homepage: '/blog/food'
    };
    this.blogContent = JSON.parse(localStorage.getItem('currentBlog') || '');
    console.log(this.blogContent);
  }
}
