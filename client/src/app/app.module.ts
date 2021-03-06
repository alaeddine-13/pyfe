import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {AppRoutingModule, ROUTING} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthHttpInterceptor} from './interceptors/auth.interceptor';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './pages/login/login.component';
import {HeaderComponent} from './components/header/header.component';
import {AnneeFormComponent} from './pages/annee-form/annee-form.component';
import {SessionFormComponent} from './pages/session-form/session-form.component';
import {UserFormComponent} from './pages/user-form/user-form.component';
import {ProjetFormComponent} from './pages/projet-form/projet-form.component';
import {CreateUsersComponent} from './pages/create-users/create-users.component';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {SessionListComponent} from './pages/session-list/session-list.component';
import {AnneeListComponent} from './pages/annee-list/annee-list.component';
import {SoutenanceListComponent} from './pages/soutenance-list/soutenance-list.component';
import {ProjetDisplayComponent} from './pages/projet-display/projet-display.component';
import {UserDisplayComponent} from './pages/user-display/user-display.component';
import {ProjetItemComponent} from './components/projet-item/projet-item.component';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {SoutenanceFormComponent} from './components/soutenance-form/soutenance-form.component';
import {ShowPipe} from './pipes/show.pipe';
import {CreateSoutenanceForProjetComponent} from './pages/create-soutenance-for-projet/create-soutenance-for-projet.component';
import {AuthGuard} from './guards/auth.guard';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FileUploadComponent} from './components/file-upload/file-upload.component';
import {DatatableComponent} from './components/datatable/datatable.component';
import {DataTablesModule} from 'angular-datatables';
import {ProjetListComponent} from './pages/projet-list/projet-list.component';

import {GestionSessionsComponent} from './pages/gestion-sessions/gestion-sessions.component';
import {GestionAnneesComponent} from './pages/gestion-annees/gestion-annees.component';
import {GestionUtilisateursComponent} from './pages/gestion-utilisateurs/gestion-utilisateurs.component';
import {SessionDatatableComponent} from './components/session-datatable/session-datatable.component';
import {AnneeDatatableComponent} from './components/annee-datatable/annee-datatable.component';
import {UserDatatableComponent} from './components/user-datatable/user-datatable.component';
import {PermissionGuard} from './guards/permission.guard';
import { GenerateRapportComponent } from './pages/generate-rapport/generate-rapport.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    AnneeFormComponent,
    SessionFormComponent,
    UserFormComponent,
    ProjetFormComponent,
    CreateUsersComponent,
    SessionListComponent,
    AnneeListComponent,
    SoutenanceListComponent,
    ProjetDisplayComponent,
    UserDisplayComponent,
    ProjetItemComponent,
    SoutenanceFormComponent,
    ShowPipe,
    CreateSoutenanceForProjetComponent,
    FileUploadComponent,
    DatatableComponent,
    ProjetListComponent,
    GestionSessionsComponent,
    GestionAnneesComponent,
    GestionUtilisateursComponent,
    SessionDatatableComponent,
    AnneeDatatableComponent,
    UserDatatableComponent,
    GenerateRapportComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ROUTING,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    NzSelectModule,
    MatCardModule,
    FlexLayoutModule,
    MatDatepickerModule,
    FontAwesomeModule,
    DataTablesModule
  ],
  providers: [AuthHttpInterceptor, AuthGuard, PermissionGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
