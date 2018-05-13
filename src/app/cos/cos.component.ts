import {Component, Inject, Input, OnInit} from '@angular/core';
import {ICartItem} from "../app.model";
import {CART} from "../app.data";
import {TOTAL} from "../tabs/tabs.component";
import {CART_SERVICE, UpdateCartService} from "../update-cart.service";
import {ARTICLE_SERVICE, IArticleService} from "../article.service";

@Component({
  selector: 'app-cos',
  templateUrl: './cos.component.html',
  styleUrls: ['./cos.component.css']
})
export class CosComponent implements OnInit {
  private articles: Array<ICartItem>;
  private totalPrice: number;
  constructor(@Inject(CART_SERVICE) private arts: UpdateCartService,
              @Inject(ARTICLE_SERVICE) private article_service: IArticleService) {
    this.totalPrice = this.arts.getTotal();
    this.articles = CART;
  }

  ngOnInit() {
  }

  removeFromCart (item: ICartItem): void {
    if (item.quantity == 1) {
      this.articles.splice(this.articles.indexOf(item), 1);
    } else {
      this.articles[this.articles.indexOf(item)].quantity--;
    }
    item.article.quantity++;
    this.totalPrice = this.totalPrice - item.article.price;
    this.arts.removeFromCart(item.article.price);
  }

  buy (): void {

    this.totalPrice = 0;
    this.articles = [];
    this.article_service.buyArticles(this.articles);
  }
}
