import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, Input } from '@angular/core';

interface squareButton {
  type?: 'submit' | 'button';
  uppercase?: boolean;
  disabled?: boolean;
  style?: 'primary' | 'minimal';
  size? : 'full' | 'large' | 'small';
}

@Component({
  selector: 'app-square-button',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './square-button.component.html',
  styleUrl: './square-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SquareButtonComponent { 
  @Input() squareButton: squareButton = {
    style: 'primary',
    size: 'full',
    uppercase: false,
  };
  @Input() loading = false;
  
  squaredButtonClasses = computed(() => [
    `square-btn__${this.squareButton.style}`,
    `square-btn__${this.squareButton.size}`,
    this.squareButton.uppercase ? 'text-uppercase' : 'text-lowercase',
  ])
}
