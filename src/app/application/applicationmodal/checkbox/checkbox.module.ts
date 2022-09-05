import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CheckboxOverview} from './checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [CheckboxOverview],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
   
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [CheckboxOverview],
})
export class CheckBoxModule {}
