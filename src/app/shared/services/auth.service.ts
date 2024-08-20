import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiService } from '@shared/api/api.service';
import { catchError, Observable, throwError } from 'rxjs';

interface User {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiService = inject(ApiService);

 login<T>(email: string): Observable<T> {
    const params = new HttpParams().set('email', email);
    return this.apiService.get<T>('users', params).pipe(
      catchError(({ status, error }: HttpErrorResponse) => 
        throwError(() => status === 404 ? error.message : 'An error occurred'))
    );
  }

  register(user: User): Observable<User> {
    return this.apiService.post<User>('users', { ...user })
  }
}
