import { Component, OnInit } from '@angular/core';
import { Programa } from 'src/app/model/programa';
import { ProgramaService } from 'src/app/service/programa.service';
import { tap } from 'rxjs/operators';
import swal from 'sweetalert2';
@Component({
  selector: 'app-list-programa',
  templateUrl: './list-programa.component.html',
  styles: []
})
export class ListProgramaComponent implements OnInit {

  programas: Programa[];
  constructor(private programaService:ProgramaService) { }

  ngOnInit() {
    this.programaService.getProgramas()
    .pipe(
      tap()
    )
    .subscribe(programas => this.programas = programas)
  }

  delete(programa: Programa): void {
    swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar el programa?`,
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

        this.programaService.delete(programa.idprograma).subscribe(data => {
          this.programas = this.programas.filter(c => c !== programa);
        });
        swal.fire(
          'Programa Eliminado!',
          `Programa eliminado con éxito.`,
          'success'
        )
      }
    })
  }

}
