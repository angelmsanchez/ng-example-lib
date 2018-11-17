import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgExampleLibComponent } from './ng-example-lib.component';

@NgModule({
  declarations: [NgExampleLibComponent],
  imports: [CommonModule],
  exports: [NgExampleLibComponent]
})
export class NgExampleLibModule { }
