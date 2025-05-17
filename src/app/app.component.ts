import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizMarkerService } from './quiz-marker.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  BrowserModule,
      HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
}
