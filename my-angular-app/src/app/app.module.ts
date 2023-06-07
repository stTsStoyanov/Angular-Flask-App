import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonInfoFormComponent } from './personInfoForm/personInfoForm.component';
import { FormsModule } from '@angular/forms';
import { PersonApi } from 'src/apis/personApi';

@NgModule({
  declarations: [			
    AppComponent,
      HomeComponent,
      PersonInfoFormComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PersonApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
