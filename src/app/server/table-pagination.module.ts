import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ServerComponent } from './server.component';
import { NgbdModalBasicServer } from './servermodal/server-modal.module';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, NgbModule],
  declarations: [ServerComponent, NgbdModalBasicServer],
  exports: [ServerComponent, NgbdModalBasicServer],
  bootstrap: [ServerComponent, NgbdModalBasicServer]
})
export class NgbdTableServerPaginationModule { }
