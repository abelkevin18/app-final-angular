import { Component, OnInit } from '@angular/core';
import { Institucioneducativa } from 'src/app/model/institucioneducativa';
import { InstitucioneducativaService } from 'src/app/service/institucioneducativa.service';
import { tap } from 'rxjs/operators';
import swal from 'sweetalert2';
@Component({
  selector: 'app-list-institucion',
  templateUrl: './list-institucion.component.html',
  styles: []
})
export class ListInstitucionComponent implements OnInit {
  instituciones: Institucioneducativa[];
  constructor(private institucioneducativaService: InstitucioneducativaService) { }

  ngOnInit() {
    this.institucioneducativaService.getInstituciones()
    .pipe(
      tap()
    )
    .subscribe(instituciones => this.instituciones = instituciones);
  }

  delete(institucion: Institucioneducativa): void {
    swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar al institucion ${institucion.nombre}?`,
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

        this.institucioneducativaService.delete(institucion.id).subscribe(data => {
          this.instituciones = this.instituciones.filter(c => c !== institucion);
        });
        swal.fire(
          'Institucion Educativa Eliminada!',
          `Institucion Educativa ${institucion.nombre} eliminada con éxito.`,
          'success'
        )
      }
    })
  }

}
