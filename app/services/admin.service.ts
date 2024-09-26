import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:3000/content'; // Adjust to your actual API URL

  constructor(private http: HttpClient) { }

  // Get content from the server
  getContent(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Save content to the server
  saveContent(content: any): Observable<any> {
    return this.http.put<any>(this.apiUrl, content);
  }
}
