import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserServices {
    private data;
    constructor(private http: Http) {}
    public getJSON(): Observable<any> {
        console.log('getdata');
        return this.http.get('../../assets/data/data.json')
                         .map((response: Response) => <any>response.json())
              .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
     }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
