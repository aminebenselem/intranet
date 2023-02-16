import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AnnuaireComponent } from './annuaire/annuaire.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { TempsDeTravailComponent } from './temps-de-travail/temps-de-travail.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent
  },
  { 
    path: '', 
    redirectTo: '/login', 
    pathMatch: 'full' 
  },
  { path:'annuaire', component: AnnuaireComponent},
  { 
    path: '', 
    redirectTo: '/annuaire', 
    pathMatch: 'full' 
  },
  { path:'acceuil', component: AcceuilComponent},
  { 
    path: '', 
    redirectTo: '/acceuil', 
    pathMatch: 'full' 
  },
  { path:'tempdetravail', component: TempsDeTravailComponent },
  { 
    path: '', 
    redirectTo: '/tempdetravail', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
