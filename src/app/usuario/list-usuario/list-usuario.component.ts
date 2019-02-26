import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styles: []
})
export class ListUsuarioComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    
    this.usuarioService.getUsuarios()
    .pipe(
      tap()
    )
    .subscribe(usuarios => this.usuarios = usuarios)
      
  }

}
