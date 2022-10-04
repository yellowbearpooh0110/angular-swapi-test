import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { LinksbarComponent } from './common/linksbar/linksbar.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { WorkInProgressComponent } from './common/work-in-progress/work-in-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinksbarComponent,
    PageNotFoundComponent,
    WorkInProgressComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
