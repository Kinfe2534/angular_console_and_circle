import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NoteSource, GET_URL, POST_URL } from './model/noteSource.model';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NoteSource,{ provide: GET_URL, useValue: `https://dev-simplrsolutions.azurewebsites.net/api/common/getNote` },{ provide: POST_URL, useValue: `https://dev-simplrsolutions.azurewebsites.net/api/common/postNote` }],
  bootstrap: [AppComponent]
})
export class AppModule { }
