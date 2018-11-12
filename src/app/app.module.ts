import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgExampleLibModule } from 'ng-example-lib';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgExampleLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
