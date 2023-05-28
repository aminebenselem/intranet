import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AnnuaireComponent } from './annuaire/annuaire.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { TempsDeTravailComponent } from './temps-de-travail/temps-de-travail.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { DocumentsComponent } from './documents/documents.component';
import { FichedepaieComponent } from './fichedepaie/fichedepaie.component';
import { ForumComponent } from './forum/forum.component';
import { EventComponent } from './event/event.component';
import { FormationComponent } from './formation/formation.component';
import { ReclamationComponent } from './reclamation/reclamation.component';

import { DemandesComponent } from './demandes/demandes.component';
import { TableaudeserviceComponent } from './temps-de-travail/tableaudeservice/tableaudeservice.component';
import { PointageComponent } from './pointage/pointage.component';
import { ActualitesAdminComponent } from './actualites-admin/actualites-admin.component';
import { FormationAdminComponent } from './formation-admin/formation-admin.component';
import { SuiviReclamationComponent } from './suivi-reclamation/suivi-reclamation.component';
import { EventAdminComponent } from './event-admin/event-admin.component';
import { AttestationdetravailAdminComponent } from './attestationdetravail-admin/attestationdetravail-admin.component';
import { LogoutComponent } from './logout/logout.component';
import { E403Component } from './e403/e403.component';
import { 
  AuthGuardService as AuthGuard 
} from './services/auth-guard.service';
import { 
  RoleGuardService as RoleGuard 
} from './services/role-guard.service';
import { FicheadminComponent } from './ficheadmin/ficheadmin.component';
import { EtatdemandeComponent } from './etatdemande/etatdemande.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent
  },
  { 
    
    path: '', 
    redirectTo: '/login', 
    pathMatch: 'full' 
  },
  { path:'annuaire', component: AnnuaireComponent,canActivate:[AuthGuard] },

  { path:'acceuil', component: AcceuilComponent,canActivate:[AuthGuard] },

  { path:'agenda', component: AgendaComponent ,canActivate:[AuthGuard] },
  
  { path:'actualites', component: ActualitesComponent,canActivate:[AuthGuard]  },
  { path:'documents', component: DocumentsComponent ,canActivate:[AuthGuard] },
  {path:'fichedepaie',component:FichedepaieComponent,canActivate:[AuthGuard] },
  {path:'reclamation',component:ReclamationComponent,canActivate:[AuthGuard] },
  { path:'forum', component: ForumComponent,canActivate:[AuthGuard]  },
  { path:'events', component: EventComponent,canActivate:[AuthGuard]  },
  { path:'formation', component: FormationComponent ,canActivate:[AuthGuard] },

  { path:'demandes', component: DemandesComponent,canActivate:[AuthGuard]  },
  {path:  'tempdetravail',component:  TempsDeTravailComponent,canActivate:[AuthGuard] },
  {path:'tableaudeservice',component:TableaudeserviceComponent,canActivate:[AuthGuard] },
 {path:'pointage',component:PointageComponent,canActivate:[AuthGuard] },
 {path:'actadmin',component:ActualitesAdminComponent,canActivate:[AuthGuard,RoleGuard], 
 data: { 
   expectedRole: 'ROLE_ADMIN'
 } },
 {path:'formationadmin',component:FormationAdminComponent,canActivate:[AuthGuard,RoleGuard], 
 data: { 
   expectedRole: 'ROLE_AdminFormation'
 } },
 {path:'suivireclamation',component:SuiviReclamationComponent,canActivate:[AuthGuard] },
 {path:'eventadmin',component:EventAdminComponent,canActivate:[AuthGuard,RoleGuard], 
 data: { 
   expectedRole: 'ROLE_ADMIN'
 } },

 {path:'ficheadmin',component:FicheadminComponent, canActivate:[AuthGuard,RoleGuard], 
 data: { 
   expectedRole: 'ROLE_ADMIN'
 }
  },
 {path:'attestation-admin',component:AttestationdetravailAdminComponent,canActivate:[AuthGuard,RoleGuard], 
 data: { 
   expectedRole: 'ROLE_ADMIN'
 } },
 {path:'etatdemandes',component:EtatdemandeComponent},
 {path:'logout',component:LogoutComponent,canActivate:[AuthGuard] },
 {path:'403',component:E403Component,canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
