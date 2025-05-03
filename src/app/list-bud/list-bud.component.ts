import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

export interface Items {
  id: number;
  title: string;
}
@Component({
  selector: 'app-list-bud',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './list-bud.component.html',
  styleUrl: './list-bud.component.scss'
})
export class ListBudComponent {
  faTrash = faTrash;
  faEdit = faEdit;
  @Input() items: Items[] = [];
  @Output() editEvent = new EventEmitter();
  @Output() removeEvent = new EventEmitter();
  
  editItem(id: number){
    this.editEvent.emit(id);
  }

  deleteItem(id: number) {
    this.removeEvent.emit(id);
  }
}
