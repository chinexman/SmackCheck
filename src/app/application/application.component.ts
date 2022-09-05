import { Component, OnInit } from '@angular/core';


interface Country {
  id?: number;
  application: string;
  type: string;
  dcsc: string;
  port: string;
  endpoint: string;
  host: string;
  action: string;
}

const COUNTRIES: Country[] = [
  {
    application: 'application name goes here',
    type: 'application type',
    dcsc: 'application type',
    port: 'application point',
    endpoint: "end port",
    host: "10.1.101.53",
    action: 'View Result',
  },
  {
    application: 'application name goes here',
    type: 'application type',
    dcsc: 'application type',
    port: 'application point',
    endpoint: "end port",
    host: "10.1.101.53",
    action: 'View Result',

  },
  {
    application: 'application name goes here',
    type: 'application type',
    dcsc: 'application type',
    port: 'application point',
    endpoint: "end port",
    host: "10.1.101.53",
    action: 'View Result',

  },
  {
    application: 'application name goes here',
    type: 'application type',
    dcsc: 'application type',
    port: 'application point',
    endpoint: "end port",
    host: "10.1.101.53",
    action: 'View Result',

  },
  {
    application: 'application name goes here',
    type: 'application type',
    dcsc: 'application type',
    port: 'application point',
    endpoint: "end port",
    host: "10.1.101.53",
    action: 'View Result',

  },
  {
    application: 'application name goes here',
    type: 'application type',
    dcsc: 'application type',
    port: 'application point',
    endpoint: "end port",
    host: "10.1.101.53",
    action: 'View Result',
  },
  {
    application: 'application name goes here',
    type: 'application type',
    dcsc: 'application type',
    port: 'application point',
    endpoint: "end port",
    host: "10.1.101.53",
    action: 'View Result',

  },
  {
    application: 'application name goes here',
    type: 'application type',
    dcsc: 'application type',
    port: 'application point',
    endpoint: "end port",
    host: "10.1.101.53",
    action: 'View Result',

  },


];


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.sass']
})


export class ApplicationComponent {


  page = 1;
  pageSize = 4;
  collectionSize = COUNTRIES.length;
  countries: Country[];

  constructor() {
    this.countries = []
    this.refreshCountries();
  }
  refreshCountries() {
    this.countries = COUNTRIES
      .map((country, i) => ({ id: i + 1, ...country }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
