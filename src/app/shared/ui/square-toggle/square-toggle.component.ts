import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-square-toggle',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './square-toggle.component.html',
  styleUrl: './square-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SquareToggleComponent { 
  @Input() isToggled = false;
  @Output() toggle = new EventEmitter<boolean>();

  onClickToggle() {
    this.toggle.emit(!this.isToggled)
  }
}
