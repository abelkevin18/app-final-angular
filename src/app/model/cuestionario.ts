import { Infante } from './infante';
import { Profesor } from './profesor';
import { Detallecuestionario } from './detallecuestionario';
import { Programa } from './programa';

export class Cuestionario {
    idcuestionario:number;
    nombre: string;
    fecha: string;
    infante: Infante;
    profesor: Profesor;
    detallecuestionarios: Detallecuestionario[] = [];
    niveleducacion: string;
    grado: string;
    programa: Programa;
    
}
