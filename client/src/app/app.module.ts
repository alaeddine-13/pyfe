import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {AppRoutingModule} from './app-routing.module';
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
import { ProjetDisplayComponent } from './pages/projet-display/projet-display.component';
import { UserDisplayComponent } from './pages/user-display/user-display.component';
import {ProjetItemComponent} from "./components/projet-item/projet-item.component";
import {MatCardModule} from '@angular/material/card';


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
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    NzSelectModule,
    MatCardModule
  ],
  providers: [AuthHttpInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule {
}
