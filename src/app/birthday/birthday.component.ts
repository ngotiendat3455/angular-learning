import { Component } from '@angular/core';
import { ListBirthdayComponent } from '../list-birthday/list-birthday.component';

export interface Person {
  id: number;
  name: string;
  age: number;
  image: string;
}

const data: Person[] = [
  { id: 1, name: 'Bertie Yates', age: 29, image: 'https://randomuser.me/api/portraits/women/75.jpg' },
  { id: 2, name: 'Hester Hogan', age: 32, image: 'https://randomuser.me/api/portraits/men/46.jpg' },
  { id: 3, name: 'Larry Little', age: 36, image: 'https://randomuser.me/api/portraits/women/34.jpg' },
  { id: 4, name: 'Sean Walsh', age: 34, image: 'https://randomuser.me/api/portraits/men/91.jpg' },
  { id: 5, name: 'Lola Gardner', age: 29, image: 'https://randomuser.me/api/portraits/women/67.jpg' },
];

@Component({
  selector: 'app-birthday',
  standalone: true,
  imports: [ListBirthdayComponent],
  templateUrl: './birthday.component.html',
  styleUrl: './birthday.component.scss'
})
export class BirthdayComponent {
  people: Person[] = data;

  clearPerson() {
    this.people = [];
  }

}
