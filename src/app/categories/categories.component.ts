import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  @Input() categories: string[] = [];
  @Output() selectCategory = new EventEmitter();

  filterItem = (chsCategory: string) => {
    this.selectCategory.emit(chsCategory);
  }
}
