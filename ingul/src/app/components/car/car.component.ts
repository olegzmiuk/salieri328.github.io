import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
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

  isEditing = false;

  private previousName: string;

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) {

  }

  ngOnInit() {
    // console.log('this.car', this.car);
  }

  ngOnChanges(): void {
    this.changeDetectorRef.detectChanges();
  }

  editCar() {
    this.previousName = this.car.name;
    this.isEditing = true;
  }

  save() {
    this.isEditing = false;
    this.onSave.emit(this.car);
  }

  cancel() {
    this.car.name = this.previousName;
    this.isEditing = false;
  }
}
