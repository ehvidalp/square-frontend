import { Injectable } from '@angular/core';

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

  constructor() { }

}
