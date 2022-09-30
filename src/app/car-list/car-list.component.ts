import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import {Car} from '../car';
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];
  selectedCar: Car = new Car;
  onSelect(car: Car): void {
    this.selectedCar = car;
  }
  constructor(private carService: CarService) { }
  getCars():void{
    this.carService.getCars().subscribe(cars=>this.cars = cars);
  }
  ngOnInit(): void {
    this.getCars();

  }

}
