import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbdDropdownManualModule } from './dropdown/dropdown.module';
import { NgbdDropdownServerModule} from './server/dropdown/dropdown.module';
import { NgbdTablePaginationModule} from './table-home/table-pagination.module';
// import { NgbdTableServerPaginationModule} from './server/table-pagination.module';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './server/server.component';
import { ApplicationComponent } from './application/application.component';
import {NgbdModalBasicServer} from './server/servermodal/server-modal.module';
import {NgbdModalBasicApplication} from './application/applicationmodal/application-modal.module';
// import {CheckBoxModule} from './application/applicationmodal/checkbox/checkbox.module';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServerComponent,
    ApplicationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbdDropdownManualModule,
    NgbModule,NgbdTablePaginationModule,
    NgbdDropdownServerModule,
    NgbdModalBasicServer,
    NgbdModalBasicApplication,
    // CheckBoxModule,
    // NgbdTableServerPaginationModule,
    RouterModule.forRoot([
      {path: 'home', component:HomeComponent },
      {path: 'server', component: ServerComponent},
      {path: 'application', component: ApplicationComponent},

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
