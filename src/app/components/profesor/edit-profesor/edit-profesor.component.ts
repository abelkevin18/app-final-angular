import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Profesor } from 'src/app/model/profesor';
import { ProfesorService } from 'src/app/service/profesor.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-profesor',
  templateUrl: './edit-profesor.component.html',
  styles: []
})
export class EditProfesorComponent implements OnInit {

  private profesor: Profesor = new Profesor();
  private errores: string[];
  constructor(private profesorService:ProfesorService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarProfesor();
  }

  cargarProfesor(): void {
    this.activatedRoute.params.subscribe(parametro => {
      let id = parametro['id'];
      if (id) {
        this.profesorService.getProfesor(id).subscribe((profesor) => this.profesor = profesor
        )
      }
    })
  }

  editar(): void {
    
    this.profesorService.update(this.profesor)
    .subscribe(
      json => {
        this.router.navigate(['/list-profesor'])
        swal.fire('Profesor actualizado', `${json.mensaje}: ${json.profesor.nombre}`, 'success');
      },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Codigo del error desde el backend: ' + err.status);
          console.error(err.error.errors);


        }
    )
    
  }
}
