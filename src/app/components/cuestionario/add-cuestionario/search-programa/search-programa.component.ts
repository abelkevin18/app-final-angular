import { Component, OnInit } from '@angular/core';
import { Programa } from 'src/app/model/programa';
import { ModalProgramaService } from '../modal-programa.service';
import { ProgramaService } from 'src/app/service/programa.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-programa',
  templateUrl: './search-programa.component.html',
  styleUrls: ['./search-programa.component.css']
})
export class SearchProgramaComponent implements OnInit {

  programas: Programa[];

  constructor(private modalProgramaService: ModalProgramaService,
    private programaService: ProgramaService) { }

  ngOnInit() {
    this.programaService.getProgramas()
    .pipe(
      tap()
    )
    .subscribe(programas => this.programas = programas)
  }

  cerrarModal(){
    this.modalProgramaService.cerrarModal();
  }

  elegir(programa: Programa){
    this.modalProgramaService.notificarUpload.emit(programa);
    this.cerrarModal();
  }



}
