import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/model/profesor';
import { ProfesorService } from 'src/app/service/profesor.service';
import { ModalProfesorService } from '../modal-profesor.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-profesor',
  templateUrl: './search-profesor.component.html',
  styleUrls: ['./search-profesor.component.css']
})
export class SearchProfesorComponent implements OnInit {

  profesores: Profesor[];

  constructor(private modalProfesorService: ModalProfesorService,
    private profesorService: ProfesorService) { }

  ngOnInit() {
    this.profesorService.getProfesores()
    .pipe(
      tap()
    )
    .subscribe(profesores => this.profesores = profesores)
  }

  cerrarModal(){
    this.modalProfesorService.cerrarModal();
  }

  elegir(profesor:Profesor){
    this.modalProfesorService.notificarUpload.emit(profesor);
    this.cerrarModal();
  }


}
