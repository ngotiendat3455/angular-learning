import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
// import { AiOutlineMinus, AiOutlinePlus } from 'angular-icons/ai';

export interface IQuesion {
  id: number;
  title: string;
  info: string;
}

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [FormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  showInfo = false;
  @Input() question!: IQuesion;

  aiOutlineMinus = faMinus;
  aiOutlinePlus = faPlus;

  setShowInfo(){
    this.showInfo = !this.showInfo;
  }
}
