import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) { 
      return true; 
    }
    this.router.navigate(['/']);
    return false;
  }

}
