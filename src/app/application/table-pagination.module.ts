import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ApplicationComponent } from './application.component';
import {NgbdModalBasicApplication} from './applicationmodal/application-modal.module'

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, NgbModule],
  declarations: [ApplicationComponent,NgbdModalBasicApplication],
  exports: [ApplicationComponent,NgbdModalBasicApplication],
  bootstrap: [ApplicationComponent,NgbdModalBasicApplication]
})
export class NgbdTableServerPaginationModule { }
