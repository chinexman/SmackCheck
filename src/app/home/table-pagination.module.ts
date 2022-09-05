import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, NgbModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  bootstrap: [HomeComponent]
})
export class NgbdTablePaginationModule {}
