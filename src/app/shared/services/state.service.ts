import { computed, Injectable, signal } from '@angular/core';

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
  squareStateData = computed(() => this.squareState());

  setEmail(email: string): void {
    this.squareState.update(state => ({ ...state, email }));
  }

  setTasks(tasks: Task[]): void {
    this.squareState.update(state => ({ ...state, tasks }));
  }


}
