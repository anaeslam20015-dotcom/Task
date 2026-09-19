import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Task1Service {
  constructor(private http: HttpClient) {}
  get() {
    return this.http.get('https://fakeapi.extendsclass.com/movies');
  }
}
