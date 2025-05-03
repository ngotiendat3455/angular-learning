import { Component, Input } from '@angular/core';
import { Person } from '../birthday/birthday.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-birthday',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-birthday.component.html',
  styleUrl: './list-birthday.component.scss'
})
export class ListBirthdayComponent {
  @Input() people: Person[] = [];
}
