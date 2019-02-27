import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable,of, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Profesor } from '../model/profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  private urlEndPoint:string = 'http://localhost:8080/api/profesores';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient, private router: Router) { }

  getProfesores(): Observable<Profesor[]> {
    return this.http.get(this.urlEndPoint).pipe(
      tap(response => {
        let profesores = response as Profesor[];
        profesores.forEach(profesor => {
          //console.log(profesor.nombre);
        })
      }),
      map(response => {
        let profesores = response as Profesor[];
        return profesores.map(profesor => {
          profesor.nombre = profesor.nombre.toUpperCase();
          profesor.apellido = profesor.apellido.toUpperCase();
          return profesor;
        })
      }),
      tap(response => {
        response.forEach(profesor => {
          //console.log(profesor.nombre);
        })
      })
    );
  }


  create(profesor: Profesor) : Observable<any> {
    return this.http
    .post<any>(this.urlEndPoint, profesor, {headers: this.httpHeaders})
    .pipe(
      catchError(e => {
        if(e.status==400) {
          return throwError(e);
        }
      })
    );
  }

  getProfesor(id:number): Observable<Profesor>{
    return this.http.get<Profesor>(`${this.urlEndPoint}/${id}`)
    .pipe(
      catchError(e => {
        this.router.navigate(['/list-profesor']);
        swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  update(profesor: Profesor): Observable<any> {
    return this.http
    .put<any>(`${this.urlEndPoint}/${profesor.idpersona}`, profesor, {headers: this.httpHeaders})
    .pipe(
      catchError(e => {
        if(e.status==400) {
          return throwError(e);
        }
      })
    );
  }

  delete(id: number): Observable<Profesor>{
    return this.http
    .delete<Profesor>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
    .pipe( 
      catchError(e => {
        this.router.navigate(['/list-profesor']);
        swal.fire('Error al eliminar al profesor', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

}
