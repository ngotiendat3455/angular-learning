import { Component } from '@angular/core';
import { SubmenuService } from '../submenu.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  constructor(private uiStateService: SubmenuService){}

  closeSubmenu() {
    this.uiStateService.closeSubmenu();
  }
}
