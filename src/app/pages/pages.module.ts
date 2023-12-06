import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { SummaryComponent } from './summary/summary.component';
import { AuthService } from '../services/auth/auth.service';
import { ServicesModule } from '../services/services.module';
import { Auth, AuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    NewsComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    AuthModule,
    FormsModule
  ]
})
export class PagesModule { }
