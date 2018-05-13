import {Component, Inject, Input, OnInit} from '@angular/core';
import {IArticle, IBar, ICartItem} from '../app.model';
import {ARTICOLE, BARS, CART} from '../app.data';
import {ARTICLE_SERVICE, IArticleService} from "../article.service";
import {CART_SERVICE, UpdateCartService} from "../update-cart.service";
export let TOTAL: number=0;
@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})



export class TabsComponent implements OnInit {
  @Input() bar: number;
  private cart_articles: Array<ICartItem>;
  private articles: Array<IArticle>;
  private totalPrice: number;
  constructor(@Inject(ARTICLE_SERVICE) private articleService: IArticleService,
              @Inject(CART_SERVICE) private arts: UpdateCartService) {
    this.cart_articles = CART;
  }
  ngOnInit(): void {
    this.articleService.getArticles(this.bar)
      .subscribe(articles => this.articles = articles);
    this.arts.getTotal();
  }

  addToCart(article: IArticle): void {
    article.quantity--;
    let ok: Number = 0;
    for (let item of this.cart_articles){
      if (item.article.name === article.name){
        item.quantity++;
        ok = 1;
      }
    }
    if (ok === 0) {
      let item :ICartItem = {
        article: article,
        quantity: 1
      };
      this.cart_articles.push(item);
    }
    this.arts.addToCart(article.price);
  }



}
