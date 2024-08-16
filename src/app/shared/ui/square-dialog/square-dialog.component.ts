import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

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
export class SquareDialogComponent implements AfterViewInit {

  @ViewChild('dialog') squareDialog!: ElementRef;
  @Input() showDialog = false;


  // delete
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.onDialog(true)
    }, 500);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['showDialog'] && changes['showDialog'].currentValue) {
  //     this.onDialog(this.showDialog);
  //   }
  // }

  onDialog(showDialog: boolean) {
    return showDialog ?
      this.squareDialog.nativeElement.showModal() :
      this.squareDialog.nativeElement.close();
  }

  openDialog() {
    console.log('Dialog opening', this.squareDialog);
    if (this.squareDialog) {
      console.log('Dialog opening');
      this.squareDialog.nativeElement.showModal();
      console.log('Dialog opened');
    }
  }
}
