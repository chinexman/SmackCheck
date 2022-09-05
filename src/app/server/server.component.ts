import { Component, OnInit } from '@angular/core';



interface Country {
  id?: number;
  servername: string;
  ipaddress: string;
  cpu: number;
  memory: number;
  storage: number;
  action: string;

}

const COUNTRIES: Country[] = [
  {
    servername: 'Server name goes here',
    ipaddress: 'ip address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
    action: 'View Result',
  },
  {
    servername: 'Server name goes here',
    ipaddress: 'ip address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
    action: 'View Result',

  },
  {
    servername: 'Server name goes here',
    ipaddress: 'ip address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
    action: 'View Result',

  },
  {
    servername: 'Server name goes here',
    ipaddress: 'ip address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
    action: 'View Result',

  },
  {
    servername: 'Server name goes here',
    ipaddress: 'ip address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
    action: 'View Result',

  },
  {
    servername: 'Server name goes here',
    ipaddress: 'ip address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
    action: 'View Result',

  },
  {
    servername: 'Server name goes here',
    ipaddress: 'ip address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
    action: 'View Result',

  },
  {
    servername: 'Server name goes here',
    ipaddress: 'ip address goes here',
    cpu: 85.6,
    memory: 73.9,
    storage: 50,
    action: 'View Result',

  },


];

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.sass']
})

export class ServerComponent {


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
