import { User } from './../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private apiUrl = "http://localhost:5264/api/users"

  constructor(
    private http: HttpClient
  ) { }

  getUsers() : Observable<User[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError((error) => {
        throw error
      })
    )
  }
}
