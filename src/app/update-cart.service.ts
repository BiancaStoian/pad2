import {Injectable, InjectionToken, Provider} from '@angular/core';

@Injectable()
export class UpdateCartService {
  total: number = 0;
  constructor() { }

  addToCart (price: number): void{
    this.total = this.total + price;
  }

  removeFromCart(price: number): void{
    this.total = this.total - price;
  }

  getTotal ():number {
    return this.total;
  }
}

export const CART_SERVICE: InjectionToken<UpdateCartService> = new InjectionToken('CARD_SERVICE');

export const CartServiceProvider: Provider = {
  provide: CART_SERVICE,
  useClass: UpdateCartService
};
