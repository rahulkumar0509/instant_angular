import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureComponent } from './feature/feature.component';
import { InstantFormComponent } from './machine/instant-form/instant-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputBoxComponent } from './machine/components/forms/input-box/input-box.component';
import { DropdownComponent } from './machine/components/forms/dropdown/dropdown.component';
import { RadioComponent } from './machine/components/forms/radio/radio.component';
import { TextareaComponent } from './machine/components/forms/textarea/textarea.component';
import { CheckboxComponent } from './machine/components/forms/checkbox/checkbox.component';
import { AutocompleteComponent } from './machine/components/forms/autocomplete/autocomplete.component';
import { CardComponent } from './machine/components/forms/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SlideToggleComponent } from './machine/components/forms/slide-toggle/slide-toggle.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import { RegistrationComponent } from './business-screens/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent,
    InstantFormComponent,
    InputBoxComponent,
    DropdownComponent,
    RadioComponent,
    TextareaComponent,
    CheckboxComponent,
    AutocompleteComponent,
    CardComponent,
    SlideToggleComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
