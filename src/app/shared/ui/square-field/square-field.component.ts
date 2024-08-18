import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

interface FieldOptions {
  placeholder?: string;
  validations?: ('email' | 'required')[];
  type?: 'text' | 'password' | 'email';
  typeField: 'input' | 'textarea';
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
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SquareFieldComponent),
      multi: true
    }
  ]
})
export class SquareFieldComponent implements ControlValueAccessor {
  @Input() fieldOptions: FieldOptions = { typeField: 'input' };
  @Input() valueField: string | null = null;
  @Output() valueFieldChange = new EventEmitter<string>();
  @Output() validationError = new EventEmitter<boolean>();
  
  errorValidation: string | null = null;
  
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};
  
  writeValue(value: string | null): void {
    this.valueField = value;
    this.validateField();
  }
  
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onInputChange(event: string): void {
    this.valueField = event;
    this.onChange(this.valueField);
    this.valueFieldChange.emit(this.valueField);
    this.validateField();
  }


  validateField() {
    if(this.fieldOptions.validations?.includes('email')) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = !this.valueField || emailRegex.test(this.valueField);
      this.errorValidation = isValidEmail ? '' : 'mail';
      this.validationError.emit(!isValidEmail);
      return;
    }

    if(this.fieldOptions.validations?.includes('required')) {
      const isValidRequired = (this.valueField?.length ?? 0) > 0;
      this.errorValidation = isValidRequired ? '' : 'required';
      this.validationError.emit(!isValidRequired);
      return;
    }
  }
  
}
