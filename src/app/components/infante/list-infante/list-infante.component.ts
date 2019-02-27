import { Component, OnInit } from '@angular/core';
import { Infante } from 'src/app/model/infante';
import { InfanteService } from 'src/app/service/infante.service';
import { tap } from 'rxjs/operators';

import swal from 'sweetalert2';

@Component({
  selector: 'app-list-infante',
  templateUrl: './list-infante.component.html',
  styles: []
})
export class ListInfanteComponent implements OnInit {

  infantes: Infante[];
  constructor(private infanteService: InfanteService) { }

  ngOnInit() {
    this.infanteService.getInfantes()
    .pipe(
      tap()
    )
    .subscribe(infantes => this.infantes = infantes)
  }


  delete(infante: Infante): void {
    swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar al infante ${infante.nombre} ${infante.apellido}?`,
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

        this.infanteService.delete(infante.idpersona).subscribe(data => {
          this.infantes = this.infantes.filter(c => c !== infante);
        });
        swal.fire(
          'Infante Eliminado!',
          `Infante ${infante.nombre} eliminado con éxito.`,
          'success'
        )
      }
    })
  }

}
