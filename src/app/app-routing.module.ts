import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodArticleComponent } from './business-screens/food-blog/food-article/food-article.component';
import { FoodBlogComponent } from './business-screens/food-blog/food-blog/food-blog.component';
import { RegistrationComponent } from './business-screens/registration/registration.component';
import { FeatureComponent } from './feature/feature.component';
import { InstantFormComponent } from './machine/instant-form/instant-form.component';

const routes: Routes = [
  {path: '',component: FeatureComponent, pathMatch: 'full'},
  {path: 'registration', component: RegistrationComponent},
  {path: 'instantscreen', component: InstantFormComponent},
  {path: 'blogs/food/article', component: FoodArticleComponent},
  {path: 'blog/food', component: FoodBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
