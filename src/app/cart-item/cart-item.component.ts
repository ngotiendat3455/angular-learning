import { Component, Input } from '@angular/core';
import { CartItem, CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  constructor(private cartService: CartService){}
  @Input() item!:CartItem;

  increase(id: string | number) {
    this.cartService.increase(id);
  }

  decrease(id: string | number) {
    this.cartService.decrease(id);
  }

  remove(id: string | number) {
    this.cartService.remove(id);
  }
}
