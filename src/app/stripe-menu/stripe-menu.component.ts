import { Component, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SubmenuComponent } from '../submenu/submenu.component';
import { CommonModule } from '@angular/common';
import { StripeSidebarComponent } from '../stripe-sidebar/stripe-sidebar.component';

@Component({
  selector: 'app-stripe-menu',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HeroComponent, StripeSidebarComponent, SubmenuComponent],
  templateUrl: './stripe-menu.component.html',
  styleUrl: './stripe-menu.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class StripeMenuComponent {

}
