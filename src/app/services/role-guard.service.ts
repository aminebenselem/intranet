import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';
import { StorageService } from './storage.service';
@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router,private storage:StorageService) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    
    const expectedRole = route.data['expectedRole'];
   
    if (
      !this.auth.isAuthenticated() || 
      this.storage.getUserRole()!= expectedRole
    ) {
      this.router.navigate(['403']);
      return false;
    }
    return true;
  }
}