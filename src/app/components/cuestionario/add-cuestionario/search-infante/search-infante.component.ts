import { Component, OnInit } from '@angular/core';
import { ModalInfanteService } from '../modal-infante.service';
import { Infante } from 'src/app/model/infante';
import { InfanteService } from 'src/app/service/infante.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-infante',
  templateUrl: './search-infante.component.html',
  styleUrls: ['./search-infante.component.css']
})
export class SearchInfanteComponent implements OnInit {

  infantes: Infante[];

  constructor(private modalInfanteService: ModalInfanteService,
    private infanteService: InfanteService) { }

  ngOnInit() {
    this.infanteService.getInfantes()
    .pipe(
      tap()
    )
    .subscribe(infantes => this.infantes = infantes)
  }

  cerrarModal(){
    this.modalInfanteService.cerrarModal();
  }

  elegir(infante:Infante) {
    this.modalInfanteService.notificarUpload.emit(infante);
    this.cerrarModal();
  }

}
