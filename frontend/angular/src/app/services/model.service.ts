import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, map  } from 'rxjs';
import { retry, catchError} from 'rxjs/operators';
import { Router } from '@angular/router';

import IResponse from '../models/IResponse';
import Response from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  baseUrl: string = 'http://localhost:3333';

  constructor(private httpClient: HttpClient, private router: Router) { }

  private getOptions() {
    const token = localStorage.getItem('token')

    return {
      headers: { 'Authorization': `Bearer ${token}` }
      // observe: 'response',
      // responseType: 'json'
    }
  }


  read( route:string ): Observable<IResponse<any[]>> {
    const token = localStorage.getItem('token')

    return this.httpClient.get<IResponse<any[]>>(`${this.baseUrl}/${route}`, {
      headers: { 'Authorization': `Bearer ${token}` },
      observe: 'response',
      responseType: 'json'
    })
      .pipe(
        map((response) => response.body || new Response<any[]>()),
        catchError((err) => {
          if (err.status === 401) {
            this.router.navigate(['/login'])
          }

          throw new Error('Não autorizado')
        })
      )
  }

  create(model: any, route:string ): Observable<IResponse<any>> {
    return this.httpClient.post<IResponse<any>>(`${this.baseUrl}/${route}`, model, this.getOptions())
  }

  delete(modelId: number, route:string): Observable<IResponse<any>> {
    return this.httpClient.delete<IResponse<any>>(`${this.baseUrl}/${route}/${modelId}`, this.getOptions())
  }

  update(model: any, route:string): Observable<IResponse<any>> {
    return this.httpClient.put<IResponse<any>>(`${this.baseUrl}/${route}/${model.id}`, model, this.getOptions())
  }





}
