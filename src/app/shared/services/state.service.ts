import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '@shared/interfaces/task.interface';

interface SquareState {
  email: string;
  tasks: Task[];
}

@Injectable({
  providedIn: 'root'
})
export class StateService {
  squareState = signal<SquareState>({ email: '', tasks: [] });
  private router = inject(Router);
  squareStateData = computed(() => this.squareState());


  setEmail(email: string): void {
    this.squareState.update(state => ({ ...state, email }));
  }

  setTasks(tasks: Task[]): void {
    this.squareState.update(state => ({ ...state, tasks }));
  }

  addTask(task: Task): void {
    this.squareState.update(state => ({ ...state, tasks: [...state.tasks, task] }));
  }

  updateTask(task: Task): void {
    this.squareState.update(state => ({
      ...state,
      tasks: state.tasks.map(t => (t.id === task.id ? task : t))
    }));
  }

  deleteTask(task: Task): void {
    this.squareState.update(state => ({
      ...state,
      tasks: state.tasks.filter(t => t.id !== task.id)
    }));
  }
  
  resetSquareState(): void {
    this.squareState.update(() => ({ email: '', tasks: [] }));
    this.router.navigate(['/login']);
  }

  
}
