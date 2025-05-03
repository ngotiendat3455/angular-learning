import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarModalServiceService } from '../sidebar-modal-service.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-home-sidebar',
  standalone: true,
  imports: [ModalComponent, SidebarComponent, FontAwesomeModule],
  templateUrl: './home-sidebar.component.html',
  styleUrl: './home-sidebar.component.scss'
})
export class HomeSidebarComponent {
  faBars = faBars
  constructor(private appStateService: SidebarModalServiceService){}

  openSidebar(){
    this.appStateService.openSidebar()
  }

  openModal() {
    this.appStateService.openModal()
  }
}
