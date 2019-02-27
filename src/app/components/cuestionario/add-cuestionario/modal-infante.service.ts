import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalInfanteService {

  modal: boolean = false;

  constructor() { }

  abrirModal() {
    this.modal = true;
  }

  cerrarModal() {
    this.modal = false;
  }
}
