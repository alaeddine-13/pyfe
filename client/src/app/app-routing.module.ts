import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {AnneeFormComponent} from './pages/annee-form/annee-form.component';
import {SessionFormComponent} from './pages/session-form/session-form.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'annee', component: AnneeFormComponent},
  {path: 'session', component: SessionFormComponent}
];
/*   { path: '**', component: NF404Component }, */
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
