import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

interface SquareState {
  email: string;
  tasks: Task[];
}

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  created_at: Date;
}

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private squareState = signal<SquareState>({ email: '', tasks: [] });
  private router = inject(Router);
  squareStateData = computed(() => this.squareState());


  setEmail(email: string): void {
    this.squareState.update(state => ({ ...state, email }));
  }

  setTasks(tasks: Task[]): void {
    this.squareState.update(state => ({ ...state, tasks }));
  }

  resetSquareState(): void {
    this.squareState.update(() => ({ email: '', tasks: [] }));
    this.router.navigate(['/login']);
  }

}
