import { Routes } from '@angular/router';
import { ListUsuarioComponent } from './usuario/list-usuario/list-usuario.component';
import { AddUsuarioComponent } from './components/usuario/add-usuario/add-usuario.component';
import { HomeComponent } from './components/home/home.component';
import { AddInfanteComponent } from './components/infante/add-infante/add-infante.component';
import { ListInfanteComponent } from './components/infante/list-infante/list-infante.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'list-usuario', component: ListUsuarioComponent },
    { path: 'add-usuario', component: AddUsuarioComponent },
    { path: 'add-infante', component: AddInfanteComponent },
    { path: 'list-infante', component: ListInfanteComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];