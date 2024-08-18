import { inject, Injectable } from '@angular/core';
import { ApiService } from '@shared/api/api.service';
import { Task } from '@shared/interfaces/task.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiService = inject(ApiService);


  constructor() { }

  getTasks(email: string): Observable<Task[]> {
    return this.apiService.get<Task[]>(`tasks/${email}`);
  }
  
}
