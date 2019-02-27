import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Cuestionario } from '../model/cuestionario';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {

  private urlEndPoint: string = 'http://localhost:8080/api/cuestionarios';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  create(cuestionario: Cuestionario) : Observable<any>{
    return this.http
    .post<any>(this.urlEndPoint, cuestionario, {headers: this.httpHeaders})
    .pipe(
      catchError(e => {
        if(e.status==400) {
          return throwError(e);
        }
      })
    );
  }
  
}
