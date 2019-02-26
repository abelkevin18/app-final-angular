import { Component, OnInit } from '@angular/core';
import { InfanteService } from 'src/app/service/infante.service';
import { Infante } from 'src/app/model/infante';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-add-infante',
  templateUrl: './add-infante.component.html',
  styles: []
})
export class AddInfanteComponent implements OnInit {

  private infante: Infante = new Infante();
  private errores: string[];
  constructor(private infanteService: InfanteService,
    private router: Router) { }

  ngOnInit() {

  }

  create(): void {
    
    console.log(this.infante);
  
    this.infanteService.create(this.infante)
      .subscribe(json => {
        this.router.navigate(['/list-infante']);
        swal.fire('Nuevo infante', `${json.mensaje}: ${json.infante.nombre}`, 'success');
      },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Codigo del error desde el backend: '+err.status);
          console.error(err.error.errors);
        }
      );

  }


}
