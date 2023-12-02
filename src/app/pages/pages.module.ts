import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { SummaryComponent } from './summary/summary.component';



@NgModule({
  declarations: [
    HomeComponent,
    NewsComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
