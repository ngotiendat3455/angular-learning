import { Component } from '@angular/core';
import { SidebarModalServiceService } from '../sidebar-modal-service.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  faTimes = faTimes;
  isModalBehavor$: Observable<boolean>;

  constructor(private appStateService: SidebarModalServiceService){
    this.isModalBehavor$ = appStateService.isModalBehavor$;
  }

  openModal() {
    this.appStateService.openModal();
  }

  closeModal() {
    this.appStateService.closeModal();
  }
}
