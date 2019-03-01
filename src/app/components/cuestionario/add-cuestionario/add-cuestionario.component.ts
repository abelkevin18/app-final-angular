import { Component, OnInit } from '@angular/core';
import { Itemcuestionario } from '../itemcuestionario';
import { Detallecuestionario } from 'src/app/model/detallecuestionario';
import { Cuestionario } from 'src/app/model/cuestionario';
import { ModalInfanteService } from './modal-infante.service';
import { ModalProfesorService } from './modal-profesor.service';
import { CuestionarioService } from 'src/app/service/cuestionario.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Resultadocuestionario } from 'src/app/model/resultadocuestionario';
import { Detalleresultado } from 'src/app/model/detalleresultado';
import { ResultadocuestionarioService } from 'src/app/service/resultadocuestionario.service';
import { Programa } from 'src/app/model/programa';
import { ProgramaService } from 'src/app/service/programa.service';
import { ModalProgramaService } from './modal-programa.service';
@Component({
  selector: 'app-add-cuestionario',
  templateUrl: './add-cuestionario.component.html',
  styles: []
})
export class AddCuestionarioComponent implements OnInit {
  itemCuestionario = [
    new Itemcuestionario(1, 'Con frecuencia falla en PRESTAR la debida atención a los detalles o por descuido se cometen errores en las tareas escolares, en el trabajo o durante otras actividades (por ejemplo, se pasan por alto o se pierden detalles).'),
    new Itemcuestionario(2, 'Con frecuencia tiene dificultades para mantener la atención en tareas o actividades recreativas (por ejemplo, tiene dificultad para mantener la atención en clases, conversaciones o lectura prolongada).'),
    new Itemcuestionario(3, 'Con frecuencia parece no escuchar cuando se le habla directamente (por ejemplo, parece tener la mente en otras cosas, incluso en ausencia de cualquier distracción aparente).'),
    new Itemcuestionario(4, 'Con frecuencia no sigue las INSTRUCCIONES y no termina las tareas escolares, los quehaceres o los deberes laborales (por ejemplo, inicia tareas, pero se distrae rápidamente y se evade con facilidad).'),
    new Itemcuestionario(5, 'Con frecuencia tiene dificultad para organizar tareas y actividades (por ejemplo, dificultad para gestionar tareas secuenciales; dificultad para poner los materiales y pertenencias en orden; descuido; mala gestión del tiempo; no cumple los plazos).'),
    new Itemcuestionario(6, 'Con frecuencia evita, le disgusta o se muestra poco entusiasta en INICIAR tareas que requieren un esfuerzo mental sostenido (por ejemplo, tareas escolares o quehaceres domésticos).'),
    new Itemcuestionario(7, 'Con frecuencia pierde cosas necesarias para tareas o actividades (por ejemplo, materiales escolares, lápices, libros, instrumentos, billetera).'),
    new Itemcuestionario(8, 'Con frecuencia se distrae con facilidad por estímulos externos .'),
    new Itemcuestionario(9, 'Con frecuencia olvida las actividades cotidianas (por ejemplo, hacer las tareas, hacer las diligencias).'),
    new Itemcuestionario(10, 'Con frecuencia juguetea o golpea con las manos o los pies o se retuerce en el asiento.'),
    new Itemcuestionario(11, 'Con frecuencia se levanta en situaciones en que se espera que permanezca sentado.'),
    new Itemcuestionario(12, 'Con frecuencia corretea o trepa en situaciones en las que no resulta apropiado. '),
    new Itemcuestionario(13, 'Con frecuencia es incapaz de jugar o de ocuparse tranquilamente en ACTIVIDADES recreativas.'),
    new Itemcuestionario(14, 'Con frecuencia está ocupado, actuando como si lo impulsara un motor (por ejemplo, es incapaz de estar o se siente incómodo estando quieto durante un tiempo prolongado).'),
    new Itemcuestionario(15, 'Con frecuencia habla excesivamente.'),
    new Itemcuestionario(16, 'Con frecuencia responde inesperadamente o antes de que se haya concluido una pregunta (por ejemplo, termina las frases de otros; no respeta el turno de conversación).'),
    new Itemcuestionario(17, 'Con frecuencia le es difícil esperar su turno (por ejemplo, mientras espera una cola).'),
    new Itemcuestionario(18, 'Con frecuencia interrumpe o se inmiscuye con otros (por ejemplo, se mete en las conversaciones, juegos o actividades; puede empezar a utilizar las cosas de otras personas sin esperar o recibir permiso).')

  ];

  private cuestionario: Cuestionario = new Cuestionario();
  private resultadoCuestionario: Resultadocuestionario = new Resultadocuestionario();

  private programa: Programa = new Programa();

  constructor(private modalInfanteService: ModalInfanteService,
    private modalProfesorService: ModalProfesorService,
    private cuestionarioService: CuestionarioService,
    private resultadoCuestionarioService: ResultadocuestionarioService,
    private programaService: ProgramaService,
    private modalProgramaService: ModalProgramaService,
    private router: Router) { }

  private errores: string[];

  ngOnInit() {

    this.modalInfanteService.notificarUpload
      .subscribe(
        infante => {
          this.cuestionario.infante = infante
        }
      );

    this.modalProfesorService.notificarUpload
      .subscribe(
        profesor => {
          this.cuestionario.profesor = profesor;
        }
    );

    this.modalProgramaService.notificarUpload
      .subscribe(
        programa => {
          this.cuestionario.programa = programa;
        }
    );
  }

  saveCuestionario(): void {

    
    this.cuestionario.nombre = "DSM-V";
    //this.programa = this.programaService.getPrograma(1);

    /*console.log(this.cuestionario.infante);
    console.log(this.cuestionario.profesor);
    console.log(this.cuestionario.fecha);*/

    this.cuestionarioService.create(this.cuestionario)
      .subscribe(json => {
        //console.log(json.cuestionario);
        this.resultadoCuestionario.cuestionario = json.cuestionario;
        this.resultadoCuestionario.apreciacion = 'por ahora no hay diagnostico';
        /*Operaciones para el resultado */
        let puntajeH: number = 0;
        let puntajeI: number = 0;
        let puntajeDA: number = 0;
        for (let lista of this.cuestionario.detallecuestionarios) {
          let numItem: number = lista.numeroitem;
          switch (true) {
            case (numItem < 10 && lista.respuestaitem === "V"):
              puntajeDA += 1;
              break;
            case (numItem < 16 && lista.respuestaitem === "V"):
              puntajeH += 1;
              break;
            case (numItem < 19 && lista.respuestaitem === "V"):
              puntajeI += 1;
              break;
            default:
              console.log("none");
              break;
          }
        }

        let detalleResultado1 = new Detalleresultado();
        let detalleResultado2 = new Detalleresultado();
        let detalleResultado3 = new Detalleresultado();

        detalleResultado1.criterio = 'Hiperactividad';
        detalleResultado1.puntuacion = puntajeH;

        detalleResultado2.criterio = 'Impulsividad';
        detalleResultado2.puntuacion = puntajeI;

        detalleResultado3.criterio = 'Déficit de Atención';
        detalleResultado3.puntuacion = puntajeDA;

        this.resultadoCuestionario.detalleresultados.push(detalleResultado1);
        this.resultadoCuestionario.detalleresultados.push(detalleResultado2);
        this.resultadoCuestionario.detalleresultados.push(detalleResultado3);

        //console.log(puntajeDA + " " + puntajeH + " " + puntajeI);
        console.log(this.resultadoCuestionario);
        
        /*this.router.navigate(['/list-infante']);
        swal.fire('Nuevo cuestionario', `Cuestionario almacenado con éxito!`, 'success');*/
        this.resultadoCuestionarioService.create(this.resultadoCuestionario)
        .subscribe(json => {
          this.router.navigate(['/list-infante']);
          swal.fire('Nuevo cuestionario', `Cuestionario almacenado con éxito!`, 'success');
        },
          err => {
            this.errores = err.error.errors as string[];
            console.error('Codigo del error desde el backend: ' + err.status);
            console.error(err.error.errors);
          }
        );

      },
        err => {
          this.errores = err.error.errors as string[];
          swal.fire('Error!', `Revise el formulario y vuelva a intentarlo !`, 'error');
          console.error('Codigo del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      );

  }

  changeRadio(event: any) {
    //console.log(event.target.value);
    //console.log(event.target.name);
    //console.log(event.target);
    let nuevoItem = new Detallecuestionario();
    nuevoItem.numeroitem = +event.target.name + 1;
    nuevoItem.descripcionitem = this.itemCuestionario[+event.target.name].descripcion;
    nuevoItem.respuestaitem = event.target.value;

    this.cuestionario.detallecuestionarios.push(nuevoItem);



    /*console.log(nuevoItem.numeroitem);
    console.log(nuevoItem.descripcionitem);*
    console.log(nuevoItem.respuestaitem);*/
  }

  abrirModal(): void {

    this.modalInfanteService.abrirModal();
  }

  abrirModal2(): void {
    this.modalProfesorService.abrirModal();
  }

  abrirModal3(): void {
    this.modalProgramaService.abrirModal();
  }


  probarModelo(): void {
    /*this.cuestionario.detallecuestionarios = this.cuestionario.detallecuestionarios.map((item: Detallecuestionario) => {
      console.log(item.numeroitem+ " "+ item.descripcionitem+" "+item.respuestaitem);
      return item;
    });*/

    console.log(this.cuestionario);

  
    
    
  }

}
