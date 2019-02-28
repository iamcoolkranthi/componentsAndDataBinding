import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ServerComponent } from "./server/server.component"

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServerdispldataComponent } from './serverdispldata/serverdispldata.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServerdispldataComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
