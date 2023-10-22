import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient ) { }

  getData(){
    return this.http.get('https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1710/data.json?role=Frontend');
  }
}
