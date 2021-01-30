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
import {NzSelectModule} from 'ng-zorro-antd/select';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    AnneeFormComponent,
    SessionFormComponent,
    UserFormComponent,
    ProjetFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    NzSelectModule
  ],
  providers: [AuthHttpInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule {
}
