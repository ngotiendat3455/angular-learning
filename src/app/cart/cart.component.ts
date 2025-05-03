import { Component } from '@angular/core';
import { CartContainerComponent } from '../cart-container/cart-container.component';
import { NavbarCartComponent } from '../navbar-cart/navbar-cart.component';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartContainerComponent, NavbarCartComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  state = this.cartService.getState();
  constructor(private cartService: CartService) { 
  }

}
