import { Component, OnInit } from '@angular/core';
import { FollowServiceService } from '../follow-service.service';
import { FollowerComponent } from '../follower/follower.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [FollowerComponent,CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit {
  constructor(private followService: FollowServiceService){}
  page = 0;
  followers = [] as any[];
  data = [] as any[][];
  loading = true;

  ngOnInit(): void {
      this.followService.getFollower().subscribe(paginatedData => {
        this.data = paginatedData;
        this.followers = this.data[this.page];
        this.loading = false;
      })
  }

  nextPage() {
    this.page = (this.page + 1) % this.data.length;
    this.followers = this.data[this.page];
  }

  prevPage() {
    this.page = (this.page - 1 + this.data.length) % this.data.length;
    this.followers = this.data[this.page];
  }

  handlePage(index: number){
    this.page = index;
    this.followers = this.data[this.page];
  }
}
