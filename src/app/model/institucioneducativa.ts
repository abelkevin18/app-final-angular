import { Infante } from './infante';

export class Institucioneducativa {
    id: number;
    nombre: string;
    direccion: string;
    telefono: string;

    infantes: Infante[] = [];
}
