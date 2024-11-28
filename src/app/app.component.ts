import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizMarkerService } from './quiz-marker.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
}
