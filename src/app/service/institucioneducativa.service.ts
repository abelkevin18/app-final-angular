import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Institucioneducativa } from '../model/institucioneducativa';
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class InstitucioneducativaService {

  private urlEndPoint:string = 'http://localhost:8080/api/ieducativas';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private router: Router) { }

  getInstituciones(): Observable<Institucioneducativa[]> {
    return this.http.get(this.urlEndPoint).pipe(
      tap(),
      map(response => {
        let instituciones = response as Institucioneducativa[];
        return instituciones.map(institucion => {
          institucion.nombre = institucion.nombre.toUpperCase();
          return institucion;
        })
      }),
      tap()
    );
  }

  getInstitucion(id:number): Observable<Institucioneducativa>{
    return this.http.get<Institucioneducativa>(`${this.urlEndPoint}/${id}`)
    .pipe(
      catchError(e => {
        this.router.navigate(['/list-institucion']);
        swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  create(institucioneducativa: Institucioneducativa) : Observable<any> {
    return this.http
    .post<any>(this.urlEndPoint, institucioneducativa, {headers: this.httpHeaders})
    .pipe(
      catchError(e => {
        if(e.status==400) {
          return throwError(e);
        }
      })
    );
  }

  update(institucioneducativa: Institucioneducativa): Observable<any> {
    return this.http
    .put<any>(`${this.urlEndPoint}/${institucioneducativa.id}`, institucioneducativa, {headers: this.httpHeaders})
    .pipe(
      catchError(e => {
        if(e.status==400) {
          return throwError(e);
        }
      })
    );
  }

  delete(id: number): Observable<Institucioneducativa>{
    return this.http
    .delete<Institucioneducativa>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
    .pipe( 
      catchError(e => {
        this.router.navigate(['/list-institucion']);
        swal.fire('Error al eliminar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

}
