import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Router } from '@angular/router';

import swal from 'sweetalert2';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styles: []
})
export class AddUsuarioComponent implements OnInit {

  private usuario: Usuario = new Usuario();
  private errores: string[];

  constructor(private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit() {
  }

  create():void {
  
    this.usuario.nombre="Javier";
    this.usuario.apellido="chagua";
    this.usuario.fechanacimiento="2012-05-05";
    this.usuarioService.create(this.usuario)
    .subscribe(json => {
      this.router.navigate(['/home']);
      swal.fire('Nuevo usuario', `${json.mensaje}: ${json.usuario.nombreusuario}`, 'success');
    },
    err => {
      this.errores = err.error.errors as string[];
      //console.error('Codigo del error desde el backend: '+err.status);
      //console.error(err.error.errors);
    }
    );
  }

}
