import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
interface Job {
  company: any, 
  dates: any, 
  duties: any, 
  title: string,
  id: number
}

@Component({
  selector: 'app-app-tab',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './app-tab.component.html',
  styleUrl: './app-tab.component.scss'
})
export class AppTabComponent implements OnInit{
  loading = true;
  value = 0;
  jobs:Job[] = [];
  current = this.jobs[this.value];
  private apiUrl = 'https://course-api.com/react-tabs-project'

  faAngleDoubleRight = faAngleDoubleRight;
  
  constructor(private http: HttpClient){
  }

  ngOnInit(){
    this.fetchJobs()
  }

  setValue(valueIndex: number) {
    this.value = valueIndex;
  }

  async fetchJobs() {
    this.loading = true;
    this.http.get<Job[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.jobs = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    })
  }
}
