import { Component, OnInit } from '@angular/core';
import { Items, ListBudComponent } from '../list-bud/list-bud.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grocery-bud',
  standalone: true,
  imports: [CommonModule, ListBudComponent, FormsModule ],
  templateUrl: './grocery-bud.component.html',
  styleUrl: './grocery-bud.component.scss'
})
export class GroceryBudComponent implements OnInit {
  name = "";
  list = [] as Items[];
  isEditing = false;
  editID: number | null = null;

  handleSubmit(){

    // e.preventDefault();
    if (this.isEditing) {
      const found = this.list.find((ele) => ele.id == this.editID);
      if (found) {
        found.title = this.name;
      }
    } else {
      const newItem = {
        id: new Date().getTime(), // Simple unique ID
        title: this.name
      } as Items;
      this.list = [...this.list, newItem];
    }
    this.name = '';
    this.isEditing = false;
    this.editID = null;
    console.log('list', this.list);
  }

  clearList(){
    this.list = [];
  }

  editItem(id: number) {
    const specificItem = this.list.find((ele) => ele.id == id);
    if (specificItem) {
      this.name = specificItem?.title;
    }
    this.isEditing = true;
    this.editID = id;
  }

  deleteItem(id: number) {
    this.list = this.list.filter((ele) => ele.id != id);
  }

  ngOnInit(): void {
      
  }
}
