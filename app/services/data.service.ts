// src/app/services/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile`);
  }

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/projects`);
  }

  getEducation(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/education`);
  }

  getContacts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/contacts`);
  }
}
