import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {AnneeFormComponent} from './pages/annee-form/annee-form.component';
import {SessionFormComponent} from './pages/session-form/session-form.component';
import {UserFormComponent} from './pages/user-form/user-form.component';
import {ProjetFormComponent} from './pages/projet-form/projet-form.component';
import {CreateUsersComponent} from './pages/create-users/create-users.component';
import {ProjetItemComponent} from './components/projet-item/projet-item.component';
import {AnneeListComponent} from './pages/annee-list/annee-list.component';
import {SessionListComponent} from './pages/session-list/session-list.component';
import {SoutenanceListComponent} from './pages/soutenance-list/soutenance-list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'annee', component: AnneeFormComponent},
  {path: 'session', component: SessionFormComponent},
  {path: 'user', component: UserFormComponent},
  {path: 'projet', component: ProjetFormComponent},
  {path: 'createUsers', component: CreateUsersComponent},
  {path: 'projet-item', component: ProjetItemComponent},
  {path: 'annees', component: AnneeListComponent},
  {path: 'sessions', component: SessionListComponent},
  {path: 'soutenances', component: SoutenanceListComponent}

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
