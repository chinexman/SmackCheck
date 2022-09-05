import { Component,OnInit } from '@angular/core';

interface Country {
  id?: number;
  application: string;
  server: string;
  scandate: string;
  status: string;
  action : string;
}

const COUNTRIES: Country[] = [
  {
    application: 'application name goes here',
    server: '3 servers',
    scandate: '11/12/20 57:29PM',
    status: 'Healthy',
    action:'View Result',
  },
  {
    application: 'application name goes here',
    server: '3 servers',
    scandate: '11/12/20 57:29PM',
    status: 'Healthy',
    action:'View Result',

  },
  {
    application: 'application name goes here',
    server: '2 servers',
    scandate: '11/12/20 57:29PM',
    status: 'Healthy',
    action:'View Result',

  },
  {
    application: 'application name goes here',
    server: '2 servers',
    scandate: '11/12/20 57:29PM',
    status: 'Critical',
    action:'View Result',

  },
  {
    application: 'application name goes here',
    server: '2 servers',
    scandate: '11/12/20 57:29PM',
    status: 'Critical',
    action:'View Result',

  },
  {
    application: 'application name goes here',
    server: '3 servers',
    scandate: '11/12/20 57:29PM',
    status: 'Critical',
    action:'View Result',

  },
  {
    application:'application name goes here',
    server: '3 servers',
    scandate: '11/12/20 57:29PM',
    status: 'Critical',
    action:'View Result',

  },
  {
    application: 'application name goes here',
    server: '3 servers',
    scandate: '11/12/20 57:29PM',
    status: 'Critical',
    action:'View Result',

  },

 
];

@Component({
  selector: 'ngbd-table-pagination',
  templateUrl: './table-pagination.html'
})
export class NgbdTablePagination {


  page = 1;
  pageSize = 4;
  collectionSize = COUNTRIES.length;
  countries: Country[];

  constructor() {
    this.countries=[]
this.refreshCountries();
  }
  refreshCountries() {
    this.countries = COUNTRIES
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
