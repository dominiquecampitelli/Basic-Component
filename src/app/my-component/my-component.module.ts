import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyComponentComponent } from './my-component.component';
import { MyComponentRoutingModule } from './my-component-routing';

@NgModule({
  declarations: [
    MyComponentComponent
  ],
  imports: [
    BrowserModule,
    MyComponentRoutingModule
  ],
  providers: [],
  exports: [
    MyComponentComponent
  ]
})
export class MyComponentModule { }
