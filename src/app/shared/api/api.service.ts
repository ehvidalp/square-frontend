import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@enviroment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private squareApiUrl = environment.squareApiUrl;

  constructor(private http: HttpClient) { }

  get<T>(path: string) {
    return this.http.get<T>(`${this.squareApiUrl}/${path}`);
  }

  post<T>(path: string, body: T) {
    return this.http.post<T>(`${this.squareApiUrl}/${path}`, body);
  }

  put<T>(path: string, body: T) {
    return this.http.put<T>(`${this.squareApiUrl}/${path}`, body);
  }

  delete<T>(path: string) {
    return this.http.delete<T>(`${this.squareApiUrl}/${path}`);
  }

}
