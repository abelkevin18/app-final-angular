import { Component, OnInit } from '@angular/core';
import { Programa } from 'src/app/model/programa';
import { ProgramaService } from 'src/app/service/programa.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-programa',
  templateUrl: './add-programa.component.html',
  styles: []
})
export class AddProgramaComponent implements OnInit {

  private programa: Programa = new Programa();
  private errores: string[];

  constructor(private programaService: ProgramaService,
    private router: Router) { }

  ngOnInit() {
  }

  create(): void {
  
    this.programaService.create(this.programa)
      .subscribe(json => {
        this.router.navigate(['/list-programa']);
        swal.fire('Nuevo programa', `${json.mensaje}`, 'success');
      },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Codigo del error desde el backend: '+err.status);
          console.error(err.error.errors);
        }
      );

  }

}
