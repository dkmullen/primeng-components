import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  exports: [
    ButtonModule,
    SplitButtonModule
  ]
})
export class PrimengModule { }
