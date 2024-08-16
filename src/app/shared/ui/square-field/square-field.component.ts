import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface FieldOptions {
  placeholder?: string;
  label?: string;
  size?: 'small' | 'large';
  error?: string;
}

@Component({
  selector: 'app-square-field',
  standalone: true,
  imports: [
    CommonModule, FormsModule
  ],
  templateUrl: './square-field.component.html',
  styleUrl: './square-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SquareFieldComponent {
  @Input() fieldOptions: FieldOptions = {};
  @Output() squareFieldChange: EventEmitter<string> = new EventEmitter<string>();
  squareFieldValue: string = '';

  sendValueField() {
    this.squareFieldChange.emit(this.squareFieldValue);
  }
}
