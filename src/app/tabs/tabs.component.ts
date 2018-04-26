import {Component, Inject, Input, OnInit} from '@angular/core';
import {IArticle, IBar} from '../app.model';
import {ARTICOLE, BARS} from '../app.data';
import {ARTICLE_SERVICE, IArticleService} from "../article.service";

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})


export class TabsComponent implements OnInit {
  @Input() bar: number;
  private articles: Array<IArticle>;
  constructor(@Inject(ARTICLE_SERVICE) private articleService: IArticleService) {
  }
  ngOnInit(): void {
    this.articleService.getArticles(this.bar)
      .subscribe(articles => this.articles = articles);
  }

  addToCart(article: IArticle): void {
    article.quantity--;
  }



}
