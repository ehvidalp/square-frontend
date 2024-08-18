import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '@shared/interfaces/task.interface';
import { StateService } from '@shared/services/state.service';
import { TaskService } from '@shared/services/task.service';
import { SquareButtonComponent } from '@shared/ui/square-button/square-button.component';
import { SquareDialogComponent } from '@shared/ui/square-dialog/square-dialog.component';
import { SquareFieldComponent } from '@shared/ui/square-field/square-field.component';
import { SquareHeaderComponent } from '@shared/ui/square-header/square-header.component';
import { SquareTaskComponent } from '@shared/ui/square-task/square-task.component';
import { SquareToggleComponent } from '@shared/ui/square-toggle/square-toggle.component';

@Component({
  selector: 'app-tasks-container',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SquareHeaderComponent,
    SquareTaskComponent,
    SquareButtonComponent,
    SquareFieldComponent,
    SquareDialogComponent,
    SquareToggleComponent,
  ],
  templateUrl: './tasks-container.component.html',
  styleUrl: './tasks-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksContainerComponent implements OnInit {
  private taskService = inject(TaskService);
  stateService = inject(StateService);

  actionTask = signal<('edit' | 'new') | null>(null);
  currentTask = signal<Task>({ title: '', description: '', completed: false });
  errorFormTask = signal<boolean>(false);

  ngOnInit(): void {
    this.getTasks();

    setTimeout(() => {
      this.actionTask.set('edit');
    }, 500);
  }
  
  getTasks() {
    const email = this.stateService.squareStateData().email ?? '';
    this.taskService.getTasks('example@mail.co').subscribe((tasks) => {
      this.stateService.setTasks(tasks);
    });
  }

  setActionTask(action: 'edit' | 'new' | null, task: Task | null) {
    this.actionTask.set(action);

    if (task !== null) this.currentTask.set(task!);

    if (task === null || action === null) this.currentTask.set({ title: '', description: '', completed: false });
    
  }

  setEditTask(task: Task) {
    this.currentTask.set(task);
    this.actionTask.set('edit');
  }

  onSubmitTask() {
    console.log('Task submitted');
  }

  updateStatusTask(status: boolean) {
    this.currentTask.update((task) => ({ ...task, completed: status }));
  }
}
