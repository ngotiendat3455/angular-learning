import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';

export interface Tour {
  id: string;
  name: string;
  info: string;
  image: string;
  price: number;
}

@Component({
  selector: 'app-tour',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tour.component.html',
  styleUrl: './tour.component.scss',
  inputs:['tour'],
  outputs:['removeTour']
})
export class TourComponent {
  readMore= false;
  tour!: Tour;

  remove = new EventEmitter<string>();

  removeTour(id: string) {
    this.remove.emit(id);
  }
}
