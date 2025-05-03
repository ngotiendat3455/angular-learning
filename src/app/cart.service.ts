import { computed, Injectable, signal } from '@angular/core';
import cartData from './data/cart';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
export interface CartItem {
  id: string | number;
  title: string;
  price: number;
  amount: number;
  img?: string;
}

export interface CartState {
  loading: boolean;
  cart: CartItem[];
}

const initialState: CartState = {
  loading: false,
  cart: cartData as CartItem[],
};

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private state = signal<CartState>(initialState);
  private readonly url = 'https://course-api.com/react-useReducer-cart-project';

  constructor(private http: HttpClient) {
    this.fetchData();
   }

  total = computed(() => {
    return this.state().cart.reduce((sum, item) => sum + Number(item.price * item.amount), 0);
  })

  amount = computed(() => {
    return this.state().cart.reduce((a, b) => { return a + b.amount }, 0);
  })

  getAmount() {
    return this.amount
  }
  getTotal(){
    return this.total
  }
  getState() {
    return this.state.asReadonly();
  }

  increase(id: string | number) {
    const updatedCart = this.state().cart.map((ele) => {
      if (ele.id == id) {
        return ({
          ...ele,
          amount: ele.amount + 1
        })
      }
      return ele;
    });
    this.updateState({
      ...this.state(),
      cart: updatedCart
    })
  }

  decrease(id: string | number) {
    const updatedCart = this.state().cart.map((ele) => {
      if (ele.id == id) {
        return ({
          ...ele,
          amount: ele.amount - 1
        })
      }
      return ele;
    }).filter((ele) => ele.amount > 0);
    this.updateState({
      ...this.state(),
      cart: updatedCart
    })
  }

  remove(id: string | number) {
    const updatedCart = this.state().cart.filter((ele) => {
      return ele.id != id
    });
    this.updateState({
      ...this.state(),
      cart: updatedCart
    })
  }

  // private getTotals(stateLocal: CartState) {
  //   const { cart } = stateLocal;
  //   const amount = cart.reduce((a, b) => { return a + b.amount }, 0);
  //   const total = cart.reduce((sum, item) => sum + Number(item.price * item.amount), 0);
  //   this.updateState({
  //     ...this.state(),
  //     amount,
  //     total
  //   })
  // }

  private fetchData(){
    this.updateState({
      ...this.state(),
      loading: true
    });
    this.http.get<CartItem[]>(this.url).subscribe({
      next: (listCart) => {
        this.updateState({
          ...this.state(),
          cart: listCart,
          loading: false
        })
      },
      error: () => {
        this.updateState({
          ...this.state(),
          loading: false,
        })
      }
    })
  }

  private updateState(newState: CartState) {
    this.state.set(newState);
  }
  clearCart(): void {
    this.updateState({ ...this.state(), cart: [] });
  }

}
