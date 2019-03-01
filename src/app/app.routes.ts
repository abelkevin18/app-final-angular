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
import { SearchInfanteComponent } from './components/cuestionario/add-cuestionario/search-infante/search-infante.component';
import { ViewReporteComponent } from './components/reporte/view-reporte/view-reporte.component';


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
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];