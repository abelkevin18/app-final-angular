import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListUsuarioComponent } from './usuario/list-usuario/list-usuario.component';

import { routes } from './app.routes'; 
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AddUsuarioComponent } from './components/usuario/add-usuario/add-usuario.component';
import { MenubarComponent } from './components/partials/menubar/menubar.component';
import { HomeComponent } from './components/home/home.component';
import { AddInfanteComponent } from './components/infante/add-infante/add-infante.component';
import { ListInfanteComponent } from './components/infante/list-infante/list-infante.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { EditInfanteComponent } from './components/infante/edit-infante/edit-infante.component';
import { AddProfesorComponent } from './components/profesor/add-profesor/add-profesor.component';
import { ListProfesorComponent } from './components/profesor/list-profesor/list-profesor.component';
import { EditProfesorComponent } from './components/profesor/edit-profesor/edit-profesor.component';
import { AddCuestionarioComponent } from './components/cuestionario/add-cuestionario/add-cuestionario.component';
import { SearchInfanteComponent } from './components/cuestionario/add-cuestionario/search-infante/search-infante.component';
import { SearchProfesorComponent } from './components/cuestionario/add-cuestionario/search-profesor/search-profesor.component';
import { ViewReporteComponent } from './components/reporte/view-reporte/view-reporte.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    ListUsuarioComponent,
    AddUsuarioComponent,
    MenubarComponent,
    HomeComponent,
    AddInfanteComponent,
    ListInfanteComponent,
    NavbarComponent,
    EditInfanteComponent,
    AddProfesorComponent,
    ListProfesorComponent,
    EditProfesorComponent,
    AddCuestionarioComponent,
    SearchInfanteComponent,
    SearchProfesorComponent,
    ViewReporteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
