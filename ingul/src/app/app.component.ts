import { Component, ViewEncapsulation } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { StorageService, ICar } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  cars: ICar[];

  constructor(
    private storageService: StorageService,
    private dragulaService: DragulaService
  ) {
    // dragulaService.drag.subscribe((value:any) => {
    //   console.log('drag', value);
    //   // this.onDrag(value.slice(1));
    // });
    dragulaService.drop.subscribe((value:any) => {
      console.log('drop', value);
      // this.onDrag(value.slice(1));
    });

    this.cars = storageService.getData();

    if (!this.cars.length) {
      this.initCars();
    }

    
  }

  initCars() {
    const carsMock: ICar[] = [
      {
        name: 'car 1',
        id: 1
      },
      {
        name: 'car 2',
        id: 2
      },
      {
        name: 'car 3',
        id: 3
      },
      {
        name: 'car 4',
        id: 4
      }
    ];

    this.storageService.setData(carsMock);
  }

  resetData(): void {
    this.storageService.setData([]);
  }

  saveGrid() {
    this.storageService.setData(this.cars);
  }
}
