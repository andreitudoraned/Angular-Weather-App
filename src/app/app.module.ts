import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ImageResizeDirective } from './image-resize.directive';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    WeeklyComponent,
    ImageResizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
