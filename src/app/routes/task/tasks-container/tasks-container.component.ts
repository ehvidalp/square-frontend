import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
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
import { Subject, takeUntil } from 'rxjs';

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
  private destroy$ = new Subject<void>();

  stateService = inject(StateService);
  actionTask = signal<('edit' | 'new') | null>(null);
  showDialogTask = false;
  currentTask = signal<Task>({ title: '', description: '', completed: false });
  errorFormTask = signal<boolean>(false);
  tasks = computed(() => {
    return (this.stateService.squareStateData().tasks ?? []).sort((a, b) => {
      if (a.completed && !b.completed) return 1;
      else if (!a.completed && b.completed) return -1;

      return a.created_at! > b.created_at! ? -1 : 1;

    });
  });

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks()
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ tasks }) => {
        this.stateService.setTasks(tasks);
      });
  }

  onSubmitTask(action?: 'edit' | 'new' | 'delete') {
    const currentAction = action || this.actionTask();

    const taskOptions = {
      edit: () => this.updateTask(),
      new: () => this.createTask(),
      delete: () => this.deleteTask(),
    };

    if (currentAction && taskOptions[currentAction]) {
      return taskOptions[currentAction]();
    }
  }

  createTask() {
    const newTask: Task = {
      ...this.currentTask(),
      email: this.stateService.squareStateData().email,
      created_at: new Date(),
    };

    this.taskService.createTask(newTask)
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ id }) => {
        this.stateService.addTask({
          id,
          ...newTask,
        });
        this.setActionTask(null, null);
      });
  }

  updateTask() {
    this.taskService.updateTask(this.currentTask())
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.stateService.updateTask(this.currentTask());
        this.setActionTask(null, null);
      });
  }

  deleteTask() {
    this.taskService.deleteTask(this.currentTask())
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.stateService.deleteTask(this.currentTask());
        this.setActionTask(null, null);
      });
  }

  setActionTask(action: 'edit' | 'new' | null, task: Task | null) {
    this.actionTask.set(action);
    this.showDialogTask = action !== null;

    if (task !== null) this.currentTask.set({ ...task! });

    if (task === null || action === null) {
      this.currentTask.set({ title: '', description: '', completed: false });
      this.errorFormTask.set(false);
    }
  }
  updateStatusTask(status: boolean) {
    this.currentTask.update((task) => ({ ...task, completed: status }));
  }
}
