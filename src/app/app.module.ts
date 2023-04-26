import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { AnnuaireComponent } from './annuaire/annuaire.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { TempsDeTravailComponent } from './temps-de-travail/temps-de-travail.component';
import { AgendaComponent } from './agenda/agenda.component';
import { EventComponent } from './event/event.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { DocumentsComponent } from './documents/documents.component';
import { ForumComponent } from './forum/forum.component';
import { FormationComponent } from './formation/formation.component';
import { FichedepaieComponent } from './fichedepaie/fichedepaie.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { DemandesComponent } from './demandes/demandes.component';
import { TableaudeserviceComponent } from './temps-de-travail/tableaudeservice/tableaudeservice.component';
import { PointageComponent } from './pointage/pointage.component';
import { ActualitesAdminComponent } from './actualites-admin/actualites-admin.component';
import { FormationAdminComponent } from './formation-admin/formation-admin.component';
import { SuiviReclamationComponent } from './suivi-reclamation/suivi-reclamation.component';

import { EventAdminComponent } from './event-admin/event-admin.component';
import { AttestationdetravailAdminComponent } from './attestationdetravail-admin/attestationdetravail-admin.component';
import { E403Component } from './e403/e403.component';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';
import { RoleGuardService } from './services/role-guard.service';
const JWT_Module_Options: JwtModuleOptions = {
  config: {
 },
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent,
    AnnuaireComponent,
    AcceuilComponent,
    TempsDeTravailComponent,
    AgendaComponent,
    EventComponent,
    ActualitesComponent,
    DocumentsComponent,
    ForumComponent,
    FormationComponent,
    FichedepaieComponent,
    ReclamationComponent,
    DemandesComponent,
    TableaudeserviceComponent,
    PointageComponent,
    ActualitesAdminComponent,
    FormationAdminComponent,
    SuiviReclamationComponent,
    EventAdminComponent,
    AttestationdetravailAdminComponent,
    E403Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot(JWT_Module_Options),
    PdfViewerModule,
    
  ],
  providers: [RoleGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}


