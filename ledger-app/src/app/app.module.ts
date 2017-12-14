import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { CommonFunctionService } from './_services/common-function.service';
import { CommonHttpService } from './_services/common-http.service';
import { SubscriptionService } from './_services/subscription.service';
import { SpeechService } from './_services/speech.service';

import { DashboardService } from './_services/dashboard.service';
import { BotComponent } from './bot/bot.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    SidebarComponent,
    BotComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CommonFunctionService, CommonHttpService, SubscriptionService, DashboardService,SpeechService],
  bootstrap: [AppComponent]
})
export class AppModule { }
