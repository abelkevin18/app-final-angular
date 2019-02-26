import { Injectable } from '@angular/core';
import { map, catchError, tap, switchAll  } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { Usuario } from '../model/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndPoint:string = 'http://localhost:8080/api/usuarios';
  
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get(this.urlEndPoint).pipe(
      tap(response => {
        let usuarios = response as Usuario[];
        usuarios.forEach(usuario => {
          console.log(usuario.nombreusuario);
        })
      }),
      map(response => {
        let usuarios = response as Usuario[];
        return usuarios.map(usuario => {
          usuario.nombreusuario = usuario.nombreusuario.toUpperCase();
          return usuario;
        })
      })
    );
  }

  create(usuario: Usuario) : Observable<any> {
    return this.http
    .post<any>(this.urlEndPoint, usuario, {headers: this.httpHeaders})
    .pipe(
      catchError(e => {
        //console.log(e.error.errors[0]);
        if(e.status==400) {
          return throwError(e);
        }
        swal.fire("e.error.mensaje",e.errors, 'error');
        return throwError(e);
      })
    );
  }
}
