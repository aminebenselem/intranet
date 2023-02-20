import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AnnuaireComponent } from './annuaire/annuaire.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { TempsDeTravailComponent } from './temps-de-travail/temps-de-travail.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { DocumentsComponent } from './documents/documents.component';

import { ForumComponent } from './forum/forum.component';
import { EventComponent } from './event/event.component';
import { FormationComponent } from './formation/formation.component';
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
  
  { path:'tempdetravail', component: TempsDeTravailComponent },
  
  { path:'agenda', component: AgendaComponent },
  
  { path:'actualites', component: ActualitesComponent },
  { path:'documents', component: DocumentsComponent },
  
  { path:'forum', component: ForumComponent },
  
  { path:'events', component: EventComponent },
  { path:'formation', component: FormationComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
