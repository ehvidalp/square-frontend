import { inject, Injectable } from '@angular/core';
import { ApiService } from '@shared/api/api.service';
import { Task } from '@shared/interfaces/task.interface';
import { Observable } from 'rxjs';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiService = inject(ApiService);
  private stateService = inject(StateService);

  constructor() { }

  getTasks(): Observable<Task[]> {
    const email = this.stateService.squareStateData().email || 'ex@dd.co';
    return this.apiService.get<Task[]>(`tasks/${email}`);
  }

  createTask(task: Task): Observable<Task> {
    return this.apiService.post<Task>('tasks', task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.apiService.put<Task>(`tasks/${task.id}`, task);
  }

  deleteTask(task: Task): Observable<Task> {
    return this.apiService.delete<Task>(`tasks/${task.id}`);
  }

  
}
