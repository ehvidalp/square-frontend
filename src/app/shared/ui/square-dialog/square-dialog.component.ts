import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-square-dialog',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './square-dialog.component.html',
  styleUrl: './square-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SquareDialogComponent implements OnChanges {
  @ViewChild('dialog') squareDialog!: ElementRef;
  @Input() showDialog = false;
  @Output() actionDialog = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['showDialog']) this.onDialog(changes['showDialog'].currentValue)
  }

  onDialog(showDialog: boolean) {
    if (!this.squareDialog) return;

    if (!showDialog && this.squareDialog && this.squareDialog?.nativeElement) {
      this.actionDialog.emit('close');
      this.squareDialog.nativeElement.close();
      return
    }
    
    this.squareDialog.nativeElement.showModal();

  }
}
