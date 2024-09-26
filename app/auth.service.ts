import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated : boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    this.http.get('http://localhost:3000/admin').subscribe((admin: any) => {
      if (admin.username === username && admin.password === password) {
        this.isAuthenticated = true;
        this.router.navigate(['/admin']);
      } else {
        alert('Invalid credentials');
      }
    });
  }

  isLoggedIn() {
    return this.isAuthenticated;
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }
}
