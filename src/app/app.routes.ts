import { Routes } from '@angular/router';
import { ListUsuarioComponent } from './usuario/list-usuario/list-usuario.component';
import { AddUsuarioComponent } from './components/usuario/add-usuario/add-usuario.component';
import { HomeComponent } from './components/home/home.component';
import { AddInfanteComponent } from './components/infante/add-infante/add-infante.component';
import { ListInfanteComponent } from './components/infante/list-infante/list-infante.component';
import { EditInfanteComponent } from './components/infante/edit-infante/edit-infante.component';
import { AddProfesorComponent } from './components/profesor/add-profesor/add-profesor.component';
import { ListProfesorComponent } from './components/profesor/list-profesor/list-profesor.component';
import { EditProfesorComponent } from './components/profesor/edit-profesor/edit-profesor.component';
import { AddCuestionarioComponent } from './components/cuestionario/add-cuestionario/add-cuestionario.component';
import { ViewReporteComponent } from './components/reporte/view-reporte/view-reporte.component';
import { AddInstitucionComponent } from './components/institucion/add-institucion/add-institucion.component';
import { ListInstitucionComponent } from './components/institucion/list-institucion/list-institucion.component';
import { EditInstitucionComponent } from './components/institucion/edit-institucion/edit-institucion.component';
import { AddProgramaComponent } from './components/programa/add-programa/add-programa.component';
import { ListProgramaComponent } from './components/programa/list-programa/list-programa.component';
import { EditProgramaComponent } from './components/programa/edit-programa/edit-programa.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'list-usuario', component: ListUsuarioComponent },
    { path: 'add-usuario', component: AddUsuarioComponent },
    { path: 'add-infante', component: AddInfanteComponent },
    { path: 'list-infante', component: ListInfanteComponent },
    { path: 'edit-infante/:id', component: EditInfanteComponent },
    { path: 'add-profesor', component: AddProfesorComponent },
    { path: 'list-profesor', component: ListProfesorComponent },
    { path: 'edit-profesor/:id', component: EditProfesorComponent },
    { path: 'add-cuestionario', component: AddCuestionarioComponent },
    { path: 'view-reporte', component: ViewReporteComponent },
    { path: 'add-institucion', component: AddInstitucionComponent },
    { path: 'list-institucion', component: ListInstitucionComponent },
    { path: 'edit-institucion/:id', component: EditInstitucionComponent },
    { path: 'add-programa', component: AddProgramaComponent },
    { path: 'list-programa', component: ListProgramaComponent },
    { path: 'edit-programa/:id', component: EditProgramaComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];