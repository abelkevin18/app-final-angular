import { Component, OnInit } from '@angular/core';
import { Programa } from 'src/app/model/programa';
import { ProgramaService } from 'src/app/service/programa.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-programa',
  templateUrl: './edit-programa.component.html',
  styles: []
})
export class EditProgramaComponent implements OnInit {

  private programa: Programa = new Programa();
  private errores: string[];
  constructor(private programaService:ProgramaService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarPrograma();
  }

  cargarPrograma(): void {
    this.activatedRoute.params.subscribe(parametro => {
      let id = parametro['id'];
      if (id) {
        this.programaService.getPrograma(id).subscribe(programa => this.programa = programa
        )
      }
    })
  }

  editar(): void {
    
    this.programaService.update(this.programa)
    .subscribe(
      json => {
        this.router.navigate(['/list-programa'])
        swal.fire('Programa actualizado', `${json.mensaje}`, 'success');
      },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Codigo del error desde el backend: ' + err.status);
          console.error(err.error.errors);


        }
    )
    
  }
}
