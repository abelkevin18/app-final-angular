import { Component, OnInit } from '@angular/core';
import { Infante } from 'src/app/model/infante';
import { InfanteService } from 'src/app/service/infante.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-list-infante',
  templateUrl: './list-infante.component.html',
  styles: []
})
export class ListInfanteComponent implements OnInit {

  infantes: Infante[];
  constructor(private infanteService: InfanteService) { }

  ngOnInit() {
    this.infanteService.getInfantes()
    .pipe(
      tap()
    )
    .subscribe(infantes => this.infantes = infantes)
  }

}
