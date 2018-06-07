import { Component, ElementRef } from '@angular/core';
import * as _ from 'lodash';
import { DragulaService } from 'ng2-dragula';
import { StorageService, ICar } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pit1Cars: ICar[];
  pit2Cars: ICar[];
  pit3Cars: ICar[];
  lobbyCars: ICar[];

  allCars: ICar[];

  pit1El: any;
  pit2El: any;
  pit3El: any;
  lobbyEl: any;

  constructor(
    private hostElement: ElementRef,
    private storageService: StorageService,
    private dragulaService: DragulaService
  ) {
    dragulaService.drag.subscribe((value:any) => {
      // console.log('drag', value);
    });
    dragulaService.drop.subscribe(([bag, car, to, from]) => {
      if (to.id !== from.id) {
        let carObject = _.find(this.allCars, {id: +car.id});
        carObject ? carObject.placement = to.id : null;
      }
      this.refreshAllIndexes();
      this.saveGrid();
    });

    this.allCars = storageService.getData();

    if (!this.allCars.length) {
      this.initCars();
    }

    this.pit1Cars = this.filterCarsByPlacement(this.allCars, 'pit1');
    this.pit2Cars = this.filterCarsByPlacement(this.allCars, 'pit2');
    this.pit3Cars = this.filterCarsByPlacement(this.allCars, 'pit3');
    this.lobbyCars = this.filterCarsByPlacement(this.allCars, 'lobby');
  }

  ngOnInit() {
    this.setDomElements();
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
        placement: 'pit1',
        color: 'green'
      }
    ];

    this.storageService.setData(carsMock);
    this.allCars = carsMock;
  }

  resetData(): void {
    this.storageService.setData([]);
    window.location.reload();
  }

  saveGrid(): void {
    this.storageService.setData(this.allCars);
  }

  createNewCar(amount = 1) {
    while (amount > 0) {
      setTimeout(() => {
        this.allCars.push({
          id: Date.now(),
          name: 'new car',
          placement: 'lobby',
          color: 'green'
        });
        this.lobbyCars = this.filterCarsByPlacement(this.allCars, 'lobby');
        this.storageService.setData(this.allCars);
      }, 10);
      amount--;
    }
  }

  deleteCar(car) {
    _.remove(this.allCars, {id: car.id});
    this.pit1Cars = this.filterCarsByPlacement(this.allCars, 'pit1');
    this.pit2Cars = this.filterCarsByPlacement(this.allCars, 'pit2');
    this.pit3Cars = this.filterCarsByPlacement(this.allCars, 'pit3');
    this.lobbyCars = this.filterCarsByPlacement(this.allCars, 'lobby');
    this.storageService.setData(this.allCars);
  }

  filterCarsByPlacement(allCars: ICar[], placement: string): ICar[] {
    return _.orderBy(_.filter(allCars, {placement: placement}), 'sortOrder');
  }

  setDomElements() {
    const host = this.hostElement.nativeElement;

    this.pit1El = host.querySelector('#pit1');
    this.pit2El = host.querySelector('#pit2');
    this.pit3El = host.querySelector('#pit3');
    this.lobbyEl = host.querySelector('#lobby');
  }

  refreshAllIndexes() {
    this.refreshIndexes(this.pit1El);
    this.refreshIndexes(this.pit2El);
    this.refreshIndexes(this.pit3El);
    this.refreshIndexes(this.lobbyEl);
  }

  refreshIndexes(elContainer) {
    const carElements = elContainer.querySelectorAll('.car-container');

    _.each(carElements, (el, index) => {
      const carObj = _.find(this.allCars, {id: +el.id});
      carObj ? carObj.sortOrder = index : null;
    });
  }
}
