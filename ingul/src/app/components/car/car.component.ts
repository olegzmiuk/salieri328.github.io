import { Component, Input, Output, EventEmitter, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ICar } from '../../services';

@Component({
  selector: 'car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  host: {
    '(keyup.esc)': 'cancel()',
    '(keyup.enter)': 'save()'
  }
})
export class CarComponent {
  @Input() car: ICar;
  @Output() onSave = new EventEmitter<ICar>();
  @Output() onDelete = new EventEmitter<ICar>();

  isEditing = false;

  private previousName: string;

  constructor(
    private hostElement: ElementRef,
    private changeDetectorRef: ChangeDetectorRef
  ) {

  }

  ngOnInit() {
    // console.log('this.car', this.car);
  }

  ngOnChanges(): void {
    this.changeDetectorRef.detectChanges();
  }

  switchColor() {
    this.car.color === 'green' ? this.car.color = 'red' : this.car.color = 'green';
    this.onSave.emit(this.car);
  }

  editCar() {
    this.isEditing = true;
    this.previousName = this.car.name;
    setTimeout(() => {
      this.setFocus();
    }, 0);
  }

  save() {
    if (!this.car.name.length) {
      this.cancel();
      return;
    }

    this.isEditing = false;
    this.onSave.emit(this.car);
  }

  cancel() {
    this.car.name = this.previousName;
    this.isEditing = false;
  }

  delete() {
    this.onDelete.emit(this.car);
  }

  private setFocus() {
    const host = this.hostElement.nativeElement;

    const elemToFocus = host.querySelector('.edit-field');
    if (elemToFocus) {
      elemToFocus.focus();
    }
  }
}
