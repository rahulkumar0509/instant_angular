import { Component, OnInit } from '@angular/core';
import * as foodList from '../food.model'
@Component({
  selector: 'app-food-blog',
  templateUrl: './food-blog.component.html',
  styleUrls: ['./food-blog.component.scss']
})
export class FoodBlogComponent implements OnInit {
  blogList = [];
  AllBlogList: any;
  header: any;
  foodBlogs:any;
  foodCategory = ['chicken', 'pasta/noodles', 'quarantine cooking', 'air fryer', 'breakfast/brunch', 'instant pot', 'gluten-free', 'tacos'];
  constructor() { }

  ngOnInit(): void {
    this.header = {
      name: "delhi's famous kulchas",
      menu: ['recipes', 'stories', 'about']
    };
    this.foodBlogs = foodList.foodArticle;
  }
  setBlogData(data:{}){
    localStorage.setItem('currentBlog', JSON.stringify(data));
  }

}
