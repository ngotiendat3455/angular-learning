import { Component, ElementRef, Renderer2 } from '@angular/core';
import { SubmenuService } from '../submenu.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  faBars = faBars;

  constructor(
    private uiStateService: SubmenuService,
    private renderer: Renderer2, // Renderer2 for safe DOM manipulation (optional here)
    private el: ElementRef // To get navbar element reference if needed for closing logic
  ) {}

  displaySubmenu(event: MouseEvent){
    const target = event.target as HTMLElement;

    if (!target || !target.textContent){
      this.uiStateService.closeSubmenu();
      return;
    }
    const text = target.textContent;

    const getBound = target.getBoundingClientRect();
    const center = (getBound.left + getBound.right) / 2;
    const bottom = getBound.bottom - 3;
    console.log('getBoundingClientRect', {
      text,
      center,
      bottom
    })
    this.uiStateService.openSubmenu(text.trim(), {
      center,
      bottom
    })
  }

  openSidebar() {
    this.uiStateService.openSidebar();
  }
}
