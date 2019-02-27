import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Profesor } from 'src/app/model/profesor';
import { ProfesorService } from 'src/app/service/profesor.service';

@Component({
  selector: 'app-list-profesor',
  templateUrl: './list-profesor.component.html',
  styles: []
})
export class ListProfesorComponent implements OnInit {
  profesores: Profesor[];
  constructor(private profesorService:ProfesorService) { }

  ngOnInit() {
    this.profesorService.getProfesores()
    .pipe(
      tap()
    )
    .subscribe(profesores => this.profesores = profesores)
  }

  delete(profesor: Profesor): void {
    swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar al profesor ${profesor.nombre} ${profesor.apellido}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

        this.profesorService.delete(profesor.idpersona).subscribe(data => {
          this.profesores = this.profesores.filter(c => c !== profesor);
        });
        swal.fire(
          'Profesor Eliminado!',
          `Profesor ${profesor.nombre} eliminado con éxito.`,
          'success'
        )
      }
    })
  }

}
