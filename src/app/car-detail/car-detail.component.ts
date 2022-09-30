import { Component, OnInit,Input } from '@angular/core';
import { Car } from '../car';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CarService } from '../car.service';
@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  @Input()car: Car = new Car;
  constructor(private route: ActivatedRoute,
    private carService: CarService,
    private location: Location
    ) { }
    goBack(): void {
      this.location.back();
    }
  ngOnInit(): void {
    this.getCar();
  }
  getCar(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carService.getCar(id).subscribe(car => this.car = car);
    }
    
}
