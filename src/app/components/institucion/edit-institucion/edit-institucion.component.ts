import { Component, OnInit } from '@angular/core';
import { Institucioneducativa } from 'src/app/model/institucioneducativa';
import { InstitucioneducativaService } from 'src/app/service/institucioneducativa.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-edit-institucion',
  templateUrl: './edit-institucion.component.html',
  styles: []
})
export class EditInstitucionComponent implements OnInit {
  private institucion: Institucioneducativa = new Institucioneducativa();
  private errores: string[];
  constructor(private institucioneducativaService: InstitucioneducativaService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarInstitucioneducativa();
  }

  cargarInstitucioneducativa(): void {
    this.activatedRoute.params.subscribe(parametro => {
      let id = parametro['id'];
      if (id) {
        this.institucioneducativaService.getInstitucion(id).subscribe(institucion => this.institucion =institucion)
      }
    })
  }

  editar(): void {
    
    this.institucioneducativaService.update(this.institucion)
    .subscribe(
      json => {
        this.router.navigate(['/list-institucion'])
        swal.fire('Institución Educativa actualizada', `${json.mensaje}: ${json.institucioneducativa.nombre}`, 'success');
      },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Codigo del error desde el backend: ' + err.status);
          console.error(err.error.errors);


        }
    )
    
  }

}
