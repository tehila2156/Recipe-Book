import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { recipy } from '../../class/recipy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipyService {

  constructor() { }

  http = inject(HttpClient);
  myurl = "http://localhost:3001/recipy/"
  arr_recipy: recipy[] = [];
  //getAll
  getAll(): Observable<recipy[]> {
    return this.http.get<recipy[]>(this.myurl + 'getAll');
  }




  //Add
  post(recipy: recipy): Observable<recipy> {
    console.log("gg")
    return this.http.post<recipy>(this.myurl + 'Add', recipy);
  }
  
  //getById
  getById(id: string): Observable<recipy> {
    console.log(this.myurl + 'getById/' + id);

    return this.http.get<recipy>(this.myurl + 'getById/' + id);
  }
}
