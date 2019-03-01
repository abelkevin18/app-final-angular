import { Component, OnInit } from '@angular/core';
import { Resultadocuestionario } from 'src/app/model/resultadocuestionario';
import { ResultadocuestionarioService } from 'src/app/service/resultadocuestionario.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-view-reporte',
  templateUrl: './view-reporte.component.html',
  styles: []
})
export class ViewReporteComponent implements OnInit {

  resultados: Resultadocuestionario[];

  newResultados: Resultadocuestionario[];

  data1:number[] = [65, 59, 80, 81, 56, 55];
  data2:number[] = [28, 48, 40, 19, 86, 27];
  data3:number[] = [28, 48, 40, 19, 16, 27];

  dataH:number[] = [];

  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  public barChartLabels = ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto', 'Sexto'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    { data:this.data1, label: 'Hiperactividad' },
    { data:this.data2, label: 'Impulsividad' },
    { data:this.data3, label: 'Deficit de atencion' }
  ];

  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];


  /*OPERACIONES PARA CAPTURAR A TODOS LOS NIÑOS SEGUN GRADO
  */
  dataVaron: number[] = [];
  dataMujer: number[] = [];

  constructor(private resultadoCuestionarioService: ResultadocuestionarioService) { }

  ngOnInit() {
    this.resultadoCuestionarioService.getResultados()
      .pipe(
        tap()
      )
      .subscribe(resultados => this.resultados = resultados);


  }

  generarReporte(): void {
    console.log(this.resultados);


    let sintoma = 'Hiperactividad';

    this.dataH.push(1);
    this.dataH.push(2);
    this.dataH.push(3);
    this.dataH.push(4);

    console.log(this.dataH);
    console.log(this.data1);
    
    

    /*for (let resultado of this.resultados) {
      console.log(resultado);

 
      for (var _i = 0; _i < resultado.detalleresultados.length; _i++) {
        if (resultado.detalleresultados[_i].criterio === 'Hiperactividad') {
          this.newResultados.push(resultado);
        }
      }
    }*/
  }
}
