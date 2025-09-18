import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../../class/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

http=inject(HttpClient);
myurl="http://localhost:3001/users/"

thisUser:user={}

//Add
arr_user:user[]=[];

//Add
post(user:user):Observable<user>{
  return this.http.post<user>(this.myurl+'Add',user);
}
//getByUserNameAndPassword 

getByUserNameAndPassword(user:user):Observable<user>{
  return this.http.post<user>(this.myurl+'getByUserNameAndPassword',user);
}






}
