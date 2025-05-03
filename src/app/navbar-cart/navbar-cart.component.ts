import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar-cart',
  standalone: true,
  imports: [],
  templateUrl: './navbar-cart.component.html',
  styleUrl: './navbar-cart.component.scss'
})
export class NavbarCartComponent {
  amount = this.cartService.getAmount();
  constructor(private cartService: CartService) {
  }
}
