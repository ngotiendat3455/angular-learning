import { Component, ViewEncapsulation } from '@angular/core';
import { SidebarModalServiceService } from '../sidebar-modal-service.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes, faHome, faUserFriends, faFolderOpen, faCalendarAlt, faBookMedical, faBook } from '@fortawesome/free-solid-svg-icons'

export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: faHome,
  },
  {
    id: 2,
    url: '/team',
    text: 'team',
    icon: faUserFriends,
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: faFolderOpen,
  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendar',
    icon: faCalendarAlt,
  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    icon: faBook,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: faBookMedical,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: faBookMedical,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: faBookMedical,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: faBookMedical,
  },
  {
    id: 5,
    url: 'https://www.twitter.com',
    icon: faBookMedical,
  },
];

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {
  faTimes = faTimes;
  links = links;
  social = social;
  
  isSidebarOpen$: Observable<boolean>
  constructor(private appStateService: SidebarModalServiceService){
    this.isSidebarOpen$ = appStateService.isSidebarOpen$;
  }
  
  closeSidebarModal() {
    this.appStateService.closeSidebar();
  }

  openSidebarModal() {
    this.appStateService.openSidebar();
  }
}
