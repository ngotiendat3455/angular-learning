import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface MenuItem {
  id: number | string; // Can be number or string
  title: string;
  category?: string; // Assuming category is part of the data based on Categories component
  price: number;
  img: string; // URL to the image
  desc: string; // Description
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
 @Input() items: MenuItem[] = [];

}
