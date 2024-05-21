import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Owner } from '../models/Owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private baseUrl = 'http://localhost:8080/owners';

  constructor(private http: HttpClient) { }

  getOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(`${this.baseUrl}`);
  }

  getOwner(id: number): Observable<Owner> {
    return this.http.get<Owner>(`${this.baseUrl}/${id}`);
  }

  createOwner(owner: Owner): Observable<Owner> {
    return this.http.post<Owner>(`${this.baseUrl}`, owner);
  }

  updateOwner(id: number, owner: Owner): Observable<Owner> {
    return this.http.put<Owner>(`${this.baseUrl}/${id}`, owner);
  }

  deleteOwner(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
