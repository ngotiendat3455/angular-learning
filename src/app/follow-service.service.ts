import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FollowServiceService {
  constructor(private http: HttpClient) { }
  private url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

  getFollower(): Observable<any[][]>{
    return this.http.get<any[]>(this.url).pipe(
      map(data => this.paginate(data))
    )
  }

  paginate(followers: any[]){
    const itemsPerPage = 10
    const numberOfPages = Math.ceil(followers.length / itemsPerPage)
  
    const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage
      return followers.slice(start, start + itemsPerPage)
    })
  
    return newFollowers
  }
}
