import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';
import { Resultadocuestionario } from '../model/resultadocuestionario';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ResultadocuestionarioService {

  private urlEndPoint: string = 'http://localhost:8080/api/resultados';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  create(resultadoCuestionario: Resultadocuestionario) : Observable<any>{
    return this.http
    .post<any>(this.urlEndPoint, resultadoCuestionario, {headers: this.httpHeaders})
    .pipe(
      catchError(e => {
        if(e.status==400) {
          return throwError(e);
        }
      })
    );
  }

  getResultados(): Observable<Resultadocuestionario[]> {
    return this.http.get(this.urlEndPoint).pipe(
      tap(response => {
        let resultados = response as Resultadocuestionario[];
        resultados.forEach(resultado => {
          //console.log(infante.nombre);
        })
      }),
      map(response => {
        let resultados = response as Resultadocuestionario[];
        return resultados.map(resultado => {
          return resultado;
        })
      }),
      tap(response => {
        response.forEach(resultado => {
          //console.log(infante.nombre);
        })
      })
    );
  }
  
}
