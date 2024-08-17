import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '@shared/services/state.service';

@Component({
  selector: 'app-square-header',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './square-header.component.html',
  styleUrl: './square-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SquareHeaderComponent { 
  private stateService = inject(StateService);

  logout(): void {
    this.stateService.resetSquareState();
  }
}
