import { Cuestionario } from './cuestionario';
import { Detalleresultado } from './detalleresultado';

export class Resultadocuestionario {
    idresultado: number;
	apreciacion: string;
    cuestionario: Cuestionario;
    detalleresultados: Detalleresultado[]=[];
    
}
