import { Component, OnInit } from '@angular/core';
import {CARS} from '../list-of-car'
import {Car} from '../car';
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars = CARS;
  selectedCar: Car = new Car;
  onSelect(car: Car): void {
    this.selectedCar = car;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
