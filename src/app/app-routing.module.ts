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


const routes: Routes = [
  { path: 'login', component: LoginComponent
  },
  { 
    path: '', 
    redirectTo: '/login', 
    pathMatch: 'full' 
  },
  { path:'annuaire', component: AnnuaireComponent},

  { path:'acceuil', component: AcceuilComponent},

  { path:'agenda', component: AgendaComponent },
  
  { path:'actualites', component: ActualitesComponent },
  { path:'documents', component: DocumentsComponent },
  {path:'fichedepaie',component:FichedepaieComponent},
  {path:'reclamation',component:ReclamationComponent},
  { path:'forum', component: ForumComponent },
  { path:'events', component: EventComponent },
  { path:'formation', component: FormationComponent },

  { path:'demandes', component: DemandesComponent },
  {path:  'tempdetravail',component:  TempsDeTravailComponent},
  {path:'tableaudeservice',component:TableaudeserviceComponent},
 {path:'pointage',component:PointageComponent},
 {path:'actadmin',component:ActualitesAdminComponent},
 {path:'formationadmin',component:FormationAdminComponent},
 {path:'suivireclamation',component:SuiviReclamationComponent},
 {path:'eventadmin',component:EventAdminComponent},
 {path:'attestation-admin',component:AttestationdetravailAdminComponent},
 {path:'logout',component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
