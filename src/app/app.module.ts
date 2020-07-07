import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlComponent } from './html/html.component';
import { HttpClientModule } from '@angular/common/http';
import { HtmlcontentComponent } from './htmlcontent/htmlcontent.component'

@NgModule({
  declarations: [
    AppComponent,
    HtmlComponent,
    HtmlcontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
