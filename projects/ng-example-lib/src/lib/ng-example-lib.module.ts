import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { NgExampleLibComponent } from './ng-example-lib.component';

@NgModule({
  declarations: [NgExampleLibComponent],
  imports: [CommonModule, BrowserModule],
  exports: [NgExampleLibComponent]
})
export class NgExampleLibModule { }
