import { Observable,of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Car } from './car';
import {CARS} from './list-of-car'
@Injectable({
  providedIn: 'root'
})
export class CarService {
  getCars(): Observable<Car[]> {
    return of(CARS);
  }
  getCar(id: number): Observable<Car> {
  const car = CARS.find(car => car.id === id)!;
  return of(car);
  }

  constructor() { }
}
