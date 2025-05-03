import { Component, OnInit } from '@angular/core';
import { ToursComponent } from '../tours/tours.component';
import { Tour } from '../tour/tour.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-app-tours',
  standalone: true,
  imports: [
    ToursComponent,
    CommonModule,
    HttpClientModule,
    LoadingComponent
],
  templateUrl: './app-tours.component.html',
  styleUrl: './app-tours.component.scss'
})
export class AppToursComponent implements OnInit {
  tours:Tour[] = [];
  loading = false;
  private apiUrl = 'https://course-api.com/react-tours-project';

  constructor(private http: HttpClient) {    
  }

  ngOnInit() {
    this.fetchTours();
  }
  fetchTours() {
    this.loading = true;
    this.http.get<Tour[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.tours = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}
