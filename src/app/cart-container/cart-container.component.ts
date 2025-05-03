import { Component } from '@angular/core';
import { CartItem, CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-cart-container',
  standalone: true,
  imports: [CommonModule, CartItemComponent],
  templateUrl: './cart-container.component.html',
  styleUrl: './cart-container.component.scss'
})
export class CartContainerComponent {
  state = this.cartService.getState();
  total = this.cartService.getTotal();
  constructor(private cartService: CartService) { 
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
