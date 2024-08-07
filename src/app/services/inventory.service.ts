import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private apiUrl = 'http://127.0.0.1:5000/app';

  constructor(private http: HttpClient) { }

  getItems(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/getItems`);
  }

  addItem(params:any): Observable<any> {

    return this.http.post(`${this.apiUrl}/addItem`, params);
  }

  updateItem(params:any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateItem`, params);
  }

  // deleteItem(params:any): Observable<any> {
  //   return this.http.delete(`${this.apiUrl}/deleteItem`, params);
  // }
  deleteItem(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Send a DELETE request with JSON payload
    return this.http.request<any>('DELETE', `${this.apiUrl}/deleteItem`, {
      body: { id: id },
      headers: headers
    });
  }
}
