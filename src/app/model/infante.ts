import { Persona } from './persona';
import { Cuestionario } from './cuestionario';
import { Historiaclinicapsicologica } from './historiaclinicapsicologica';

export class Infante extends Persona {
    nivelsocioeconomico: string;
    niveleducacion: string;
    grado: string;
    cuestionarios: Cuestionario[] = [];
    historiasclinicas: Historiaclinicapsicologica[] = [];
}
