import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  constructor(private http: Http) { }
  ngOnInit(): void {
    this.dtOptions = {
        ajax: '../../../assets/data/data.json',
      columns: [{
        title: 'Name',
        type: 'select',
        data: 'name'
      }, {
        title: 'Email',
        data: 'email'
      }, {
        title: 'City',
        data: 'city'
      }, {
        title: 'Age',
        data: 'age'
      }]
    };
  }
  private handleError(error: any) {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
