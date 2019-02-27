import { Component, OnInit } from '@angular/core';
import { ModalInfanteService } from '../modal-infante.service';

@Component({
  selector: 'app-search-infante',
  templateUrl: './search-infante.component.html',
  styleUrls: ['./search-infante.component.css']
})
export class SearchInfanteComponent implements OnInit {

  constructor(private modalInfanteService: ModalInfanteService) { }

  ngOnInit() {
  }

  cerrarModal(){
    this.modalInfanteService.cerrarModal();
  }

  elegir() {
    console.log("elegir");
    
  }

}
