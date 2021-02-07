import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {AnneeFormComponent} from './pages/annee-form/annee-form.component';
import {SessionFormComponent} from './pages/session-form/session-form.component';
import {UserFormComponent} from './pages/user-form/user-form.component';
import {ProjetFormComponent} from './pages/projet-form/projet-form.component';
import {CreateUsersComponent} from './pages/create-users/create-users.component';
import {SoutenanceListComponent} from './pages/soutenance-list/soutenance-list.component';
import {ProjetDisplayComponent} from './pages/projet-display/projet-display.component';
import {UserDisplayComponent} from './pages/user-display/user-display.component';
import {CreateSoutenanceForProjetComponent} from './pages/create-soutenance-for-projet/create-soutenance-for-projet.component';
import {ProjetListComponent} from './pages/projet-list/projet-list.component';
import {GestionSessionsComponent} from './pages/gestion-sessions/gestion-sessions.component';
import {GestionAnneesComponent} from './pages/gestion-annees/gestion-annees.component';
import {GestionUtilisateursComponent} from './pages/gestion-utilisateurs/gestion-utilisateurs.component';
import {PermissionGuard} from './guards/permission.guard';
import { GenerateRapportComponent } from './pages/generate-rapport/generate-rapport.component';

const routes: Routes = [
  {path: '', component: ProjetListComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'annee', component: AnneeFormComponent, canActivate: [PermissionGuard], data: {
      role: 'etudiant'
    }
  },
  {path: 'annee/:id', component: AnneeFormComponent},
  {path: 'session', component: SessionFormComponent},
  {path: 'session/:id', component: SessionFormComponent},
  {path: 'user-edit', component: UserFormComponent},
  {path: 'projet-edit', component: ProjetFormComponent},
  {path: 'projet-edit/:id', component: ProjetFormComponent},
  {path: 'create-users', component: CreateUsersComponent},
  {path: 'soutenances', component: SoutenanceListComponent},
  {path: 'projet/:id', component: ProjetDisplayComponent},
  {path: 'user/:id', component: UserDisplayComponent},
  {path: 'soutenance/new/:id', component: CreateSoutenanceForProjetComponent},
  {path: 'gestion-sessions', component: GestionSessionsComponent},
  {path: 'gestion-annees', component: GestionAnneesComponent},
  {path: 'gestion-utilisateurs', component: GestionUtilisateursComponent},
  {path: 'session/rapport/:id', component: GenerateRapportComponent},
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
export class AppRoutingModule {
}

export const ROUTING = RouterModule.forRoot(routes);
