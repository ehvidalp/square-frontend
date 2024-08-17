import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SquareButtonComponent } from '@shared/ui/square-button/square-button.component';
import { SquareFieldComponent } from '@shared/ui/square-field/square-field.component';
import { SquareHeaderComponent } from '@shared/ui/square-header/square-header.component';
import { SquareTaskComponent } from '@shared/ui/square-task/square-task.component';

@Component({
  selector: 'app-tasks-container',
  standalone: true,
  imports: [
    CommonModule, SquareHeaderComponent, SquareTaskComponent, SquareButtonComponent, SquareFieldComponent
  ],
  templateUrl: './tasks-container.component.html',
  styleUrl: './tasks-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksContainerComponent { }
