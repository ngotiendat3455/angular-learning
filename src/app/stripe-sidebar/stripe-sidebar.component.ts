import { Component } from '@angular/core';
import { SubmenuService } from '../submenu.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { sublinks } from '../data/sublink';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stripe-sidebar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './stripe-sidebar.component.html',
  styleUrl: './stripe-sidebar.component.scss'
})
export class StripeSidebarComponent {
  faTimes = faTimes;
  sublinks = sublinks;
  isSidebarOpen$!: Observable<boolean>;

  constructor(private uiStateService: SubmenuService){
    this.isSidebarOpen$ = this.uiStateService.isSidebarOpen$;
  }
  
  closeSidebar(){
    this.uiStateService.closeSidebar();
  }
}
