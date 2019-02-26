import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Infante } from 'src/app/model/infante';
import { InfanteService } from 'src/app/service/infante.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-infante',
  templateUrl: './edit-infante.component.html',
  styleUrls: ['./edit-infante.component.css']
})
export class EditInfanteComponent implements OnInit {

  private infante: Infante = new Infante();
  private errores: string[];
  constructor(private infanteService: InfanteService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarInfante();
  }

  cargarInfante(): void {
    this.activatedRoute.params.subscribe(parametro => {
      let id = parametro['id'];
      if (id) {
        this.infanteService.getInfante(id).subscribe((infante) => this.infante = infante
        )
      }
    })
  }

  editar(): void {
    
    this.infante.cuestionarios = null;
    this.infante.historiasclinicas = null;

    this.infanteService.update(this.infante)
    .subscribe(
      json => {
        this.router.navigate(['/list-infante'])
        swal.fire('Infante actualizado', `${json.mensaje}: ${json.infante.nombre}`, 'success');
      },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Codigo del error desde el backend: ' + err.status);
          console.error(err.error.errors);


        }
    )
    
  }

}
