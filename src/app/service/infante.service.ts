import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable,of, throwError } from 'rxjs';
import { Infante } from '../model/infante';
import { map, tap, catchError } from 'rxjs/operators';
import swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class InfanteService {

  //private urlEndPoint:string = 'https://app-tdah.herokuapp.com/api/infantes';
  private urlEndPoint:string = 'http://localhost:8080/api/infantes';
  
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  
  constructor(private http: HttpClient, private router: Router) { }

  getInfantes(): Observable<Infante[]> {
    return this.http.get(this.urlEndPoint).pipe(
      tap(response => {
        let infantes = response as Infante[];
        infantes.forEach(infante => {
          //console.log(infante.nombre);
          
        })
      }),
      map(response => {
        let infantes = response as Infante[];
        return infantes.map(infante => {
          infante.nombre = infante.nombre.toUpperCase();
          infante.apellido = infante.apellido.toUpperCase();
          return infante;
        })
      }),
      tap(response => {
        response.forEach(infante => {
          //console.log(infante.nombre);
        })
      })
    );
  }

  create(infante: Infante) : Observable<any> {
    return this.http
    .post<any>(this.urlEndPoint, infante, {headers: this.httpHeaders})
    .pipe(
      catchError(e => {
        //inicio validacion con servidor
        if(e.status==400) {
          return throwError(e);
        }
      })
    );
  }

  getInfante(id:number): Observable<Infante>{
    return this.http.get<Infante>(`${this.urlEndPoint}/${id}`)
    .pipe(
      catchError(e => {
        this.router.navigate(['/list-infante']);
        swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  update(infante: Infante): Observable<any> {
    return this.http
    .put<any>(`${this.urlEndPoint}/${infante.idpersona}`, infante, {headers: this.httpHeaders})
    .pipe(
      catchError(e => {
        if(e.status==400) {
          return throwError(e);
        }
      })
    );
  }
   
}
