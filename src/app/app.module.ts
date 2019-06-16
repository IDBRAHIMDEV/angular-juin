import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Content1Component } from './content1/content1.component';
import { Content2Component } from './content2/content2.component';

import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './courses/courses.component';
import { VotesComponent } from './votes/votes.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    Content1Component,
    Content2Component,
    CoursesComponent,
    VotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
