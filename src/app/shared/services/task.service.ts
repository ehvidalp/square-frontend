import { inject, Injectable } from '@angular/core';
import { ApiService } from '@shared/api/api.service';
import { Task } from '@shared/interfaces/task.interface';
import { Observable } from 'rxjs';
import { StateService } from './state.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiService = inject(ApiService);
  private stateService = inject(StateService);

  constructor() { }

  getTasks(): Observable<{ tasks: Task[] }> {
    const params = new HttpParams().set('email', this.stateService.squareStateData().email);
    return this.apiService.get<{ tasks: Task[] }>('tasks', params);
  }

  createTask(task: Task): Observable<Partial<Task>> {
    return this.apiService.post<Partial<Task>>('tasks', task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.apiService.put<Task>(`tasks/${task.id}`, task);
  }

  deleteTask(task: Task): Observable<Task> {
    return this.apiService.delete<Task>(`tasks/${task.id}`);
  }


}
