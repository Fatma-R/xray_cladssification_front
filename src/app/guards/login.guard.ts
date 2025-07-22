import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
  const token = localStorage.getItem('access_token');
  if (token) {
    this.router.navigate(['/home']);
    return false;
  }
  return true;
}
 }