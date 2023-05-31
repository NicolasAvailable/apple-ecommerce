import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingLogoComponent } from './loading-logo/loading-logo.component';



@NgModule({
  declarations: [
    LoadingLogoComponent
  ],
  exports: [
    LoadingLogoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
