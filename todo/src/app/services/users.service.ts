import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersBaseUrl = environment.usersBaseUrl;

  constructor(private http:HttpClient, private snack:MatSnackBar) { }

findAll(): Observable<Users[]>{

  return this.http.get<Users[]>(this.usersBaseUrl);
}

findById(id: any):Observable<Users>{
  const url =  `${this.usersBaseUrl}/${id}`

  return this.http.get<Users>(url)



}

update(users: Users): Observable<Users>{
  const url =  `${this.usersBaseUrl}/${users.id}`
  return this.http.put<Users>(url, users);

}

delete (id: any): Observable<void>{
  const url =  `${this.usersBaseUrl}/${id}`
  return this.http.delete<void>(url);
}

create(users: Users):Observable<Users>{
  return this.http.post<Users>(this.usersBaseUrl, users);
}

 message (msg: String):void{
   this.snack.open(`${msg}`, 'OK',{
     horizontalPosition:'end',
     verticalPosition:'top',
     duration:4000
   })
 }


}
