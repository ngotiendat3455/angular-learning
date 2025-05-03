import { Component, EventEmitter } from '@angular/core';
import { Tour, TourComponent } from '../tour/tour.component';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [TourComponent],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.scss',
  inputs: ['tours'],
  outputs: ['removeTour'], 
})
export class ToursComponent {
  tours: Tour[] = []
  removeTourEvent = new EventEmitter<string>();

  removeTour(id: string) {
    this.removeTourEvent.emit(id);
  }
}
