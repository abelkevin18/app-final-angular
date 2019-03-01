import { Component, OnInit } from '@angular/core';
import { Institucioneducativa } from 'src/app/model/institucioneducativa';
import { InstitucioneducativaService } from 'src/app/service/institucioneducativa.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-institucion',
  templateUrl: './add-institucion.component.html',
  styles: []
})
export class AddInstitucionComponent implements OnInit {

  private institucion: Institucioneducativa = new Institucioneducativa();
  private errores: string[];

  constructor(private institucioneducativaService: InstitucioneducativaService,
    private router: Router) { }

  ngOnInit() {
  }

  create(): void {
    
    this.institucioneducativaService.create(this.institucion)
      .subscribe(json => {
        this.router.navigate(['/list-institucion']);
        swal.fire('Nueva Institucion Educativa', `${json.mensaje}: ${json.institucioneducativa.nombre}`, 'success');
      },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Codigo del error desde el backend: '+err.status);
          console.error(err.error.errors);
        }
      );

  }
}
