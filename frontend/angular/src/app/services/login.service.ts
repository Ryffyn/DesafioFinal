import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import Auth from '../models/Auth';
import IResponse from '../models/IResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl: string = 'http://localhost:3333';

  constructor(private httpClient: HttpClient) { }

  private getHeaders() {
    const token = localStorage.getItem('token')

    return {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  }

  auth(username: string, password: string): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/login`, { username, password }).pipe(

      catchError((err) => {
        if (err.status === 400) {
          alert('Incorrect username or password')
        }

        throw new Error('Not authorized')
      })
    )
  }


  create(model: any, route:string ): Observable<IResponse<any>> {
    return this.httpClient.post<IResponse<any>>(`${this.baseUrl}/${route}`, model)
  }


}
