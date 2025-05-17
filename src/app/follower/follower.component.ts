import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-follower',
  standalone: true,
  imports: [],
  templateUrl: './follower.component.html',
  styleUrl: './follower.component.scss'
})
export class FollowerComponent {
  @Input() follow: any;
}
