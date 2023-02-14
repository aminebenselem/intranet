import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualteComponent } from './actualte/actualte.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: '', 
    redirectTo: '/login', 
    pathMatch: 'full' 
  },
  { path: 'actalité', component: ActualteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
