import {Injectable, InjectionToken} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {IArticle, ICartItem} from "./app.model";


export interface IArticleService {

  getArticles(type: number): Observable<Array<IArticle>>;
  buyArticles (articles: Array<ICartItem>): void;

}
export const ARTICLE_SERVICE = new InjectionToken<IArticleService>('ARTICLE_SERVICE');
