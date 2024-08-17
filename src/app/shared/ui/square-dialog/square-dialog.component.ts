import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

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
export class SquareDialogComponent implements OnChanges{

  @ViewChild('dialog') squareDialog!: ElementRef;
  @Input() showDialog = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['showDialog'] && changes['showDialog'].currentValue) this.onDialog(this.showDialog);
  }

  
  onDialog(showDialog: boolean) {
    return showDialog ?
      this.squareDialog.nativeElement.showModal() :
      this.squareDialog.nativeElement.close();
  }
}
