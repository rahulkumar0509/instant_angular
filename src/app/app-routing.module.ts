import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './business-screens/registration/registration.component';
import { FeatureComponent } from './feature/feature.component';
import { InstantFormComponent } from './machine/instant-form/instant-form.component';

const routes: Routes = [
  {path: '',component: FeatureComponent, pathMatch: 'full'},
  {path: 'registration', component: RegistrationComponent},
  {path: 'instantscreen', component: InstantFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
