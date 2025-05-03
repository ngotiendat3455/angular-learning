import { Component } from '@angular/core';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-app-review',
  standalone: true,
  imports: [ReviewComponent],
  templateUrl: './app-review.component.html',
  styleUrl: './app-review.component.scss'
})
export class AppReviewComponent {

}
