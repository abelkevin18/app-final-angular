import { Persona } from './persona';
import { Cuestionario } from './cuestionario';
import { Historiaclinicapsicologica } from './historiaclinicapsicologica';
import { Institucioneducativa } from './institucioneducativa';

export class Infante extends Persona {
    nivelsocioeconomico: string;
    institucioneducativa: Institucioneducativa;
    cuestionarios: Cuestionario[] = [];
    //historiasclinicas: Historiaclinicapsicologica[] = [];
}
