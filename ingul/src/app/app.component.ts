import { Component } from '@angular/core';
import * as _ from 'lodash';
import { DragulaService } from 'ng2-dragula';
import { StorageService, ICar } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cars: ICar[];

  constructor(
    private storageService: StorageService,
    private dragulaService: DragulaService
  ) {
    dragulaService.drag.subscribe((value:any) => {
      // console.log('drag', value);
    });
    dragulaService.drop.subscribe(([bag, car, to, from]) => {
      if (to.id === 'pit' && from.id === 'lobby') {
        let carObject = _.find(this.cars, {id: +car.id});
        carObject ? carObject.placement = 'pit' : null;
      }
      if (to.id === 'lobby' && from.id === 'pit') {
        let carObject = _.find(this.cars, {id: +car.id});
        carObject ? carObject.placement = 'lobby' : null;
      }

      this.saveGrid();
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
        id: 1,
        placement: 'lobby',
        color: 'green'
      },
      {
        name: 'car 2',
        id: 2,
        placement: 'lobby',
        color: 'green'
      },
      {
        name: 'car 3',
        id: 3,
        placement: 'lobby',
        color: 'red'
      },
      {
        name: 'car 4',
        id: 4,
        placement: 'lobby',
        color: 'green'
      },
      {
        name: 'car 5',
        id: 5,
        placement: 'pit',
        color: 'green'
      }
    ];

    this.storageService.setData(carsMock);
    this.cars = carsMock;
  }

  resetData(): void {
    this.storageService.setData([]);
    window.location.reload();
  }

  saveGrid(): void {
    this.storageService.setData(this.cars);
  }

  createNewCar(car) {
    this.cars.push({
      id: Date.now(),
      name: 'new car',
      placement: 'lobby',
      color: 'green'
    });
    this.storageService.setData(this.cars);
  }

  deleteCar(car) {
    _.remove(this.cars, {id: car.id});
    this.storageService.setData(this.cars);
  }

  filterCarsByPlacement(cars: ICar[], placement: string): ICar[] {
    return _.filter(cars, {placement: placement});
  }
}
