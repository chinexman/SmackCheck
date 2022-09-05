import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdDropdownServer } from './dropdowncomponent';

@NgModule({
  imports: [BrowserModule,NgbModule],
  declarations: [NgbdDropdownServer],
  exports: [NgbdDropdownServer],
  bootstrap: [NgbdDropdownServer]
})
export class NgbdDropdownServerModule {}
