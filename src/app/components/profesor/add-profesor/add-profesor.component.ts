import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/model/profesor';
import { ProfesorService } from 'src/app/service/profesor.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-profesor',
  templateUrl: './add-profesor.component.html',
  styles: []
})
export class AddProfesorComponent implements OnInit {

  private profesor: Profesor = new Profesor();
  private errores: string[];

  constructor(private profesorService: ProfesorService,
    private router: Router) { }

  ngOnInit() {
  }

  create(): void {
    
    console.log(this.profesor);
  
    this.profesorService.create(this.profesor)
      .subscribe(json => {
        this.router.navigate(['/list-profesor']);
        swal.fire('Nuevo profesor', `${json.mensaje}: ${json.profesor.nombre}`, 'success');
      },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Codigo del error desde el backend: '+err.status);
          console.error(err.error.errors);
        }
      );

  }
}
