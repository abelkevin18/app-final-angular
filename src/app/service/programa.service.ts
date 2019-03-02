import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { Programa } from '../model/programa';
import { tap, map, catchError } from 'rxjs/operators';
import swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class ProgramaService {
  private urlEndPoint:string = 'http://localhost:8080/api/programas';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient, private router: Router) { }


  getProgramas(): Observable<Programa[]> {
    return this.http.get(this.urlEndPoint).pipe(
      tap(),
      map(response => {
        let programas = response as Programa[];
        return programas.map(programa => {
          return programa;
        })
      }),
      tap()
    );
  }

  getPrograma(id:number): Observable<Programa>{
    return this.http.get<Programa>(`${this.urlEndPoint}/${id}`)
    .pipe(
      catchError(e => {
        this.router.navigate(['/list-programa']);
        swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }


  create(programa: Programa) : Observable<any> {
    return this.http
    .post<any>(this.urlEndPoint, programa, {headers: this.httpHeaders})
    .pipe(
      catchError(e => {
        if(e.status==400) {
          return throwError(e);
        }
      })
    );
  }

  update(programa: Programa): Observable<any> {
    return this.http
    .put<any>(`${this.urlEndPoint}/${programa.idprograma}`, programa, {headers: this.httpHeaders})
    .pipe(
      catchError(e => {
        if(e.status==400) {
          return throwError(e);
        }
      })
    );
  }

  delete(id: number): Observable<Programa>{
    return this.http
    .delete<Programa>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
    .pipe( 
      catchError(e => {
        this.router.navigate(['/list-programa']);
        swal.fire('Error al eliminar al programa', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

}
