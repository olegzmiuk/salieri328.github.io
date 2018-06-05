import { Inject, Injectable } from '@angular/core';
import * as _ from 'lodash';

export interface ICar {
  name: string;
  id: number;
  placement?: string;
  color?: 'green' | 'red';
}

@Injectable()
export class StorageService {
  cars: ICar[] = [];

  constructor(
  ) {
    this.initData();
  }

  initData(): void {
    this.cars = this.getFromStorage();
    console.log('this.cars', this.cars);
  }

  getData(): ICar[] {
    return this.cars;
  }

  setData(cars: ICar[]): void {
    this.saveToStorage(cars);
  }

  private getFromStorage(): ICar[] {
    const cars = JSON.parse(localStorage.getItem('cars'));
    return cars == null ? [] : cars;
  }

  private saveToStorage(cars: ICar[]): void {
    localStorage.setItem('cars', JSON.stringify(cars));
  }
}
