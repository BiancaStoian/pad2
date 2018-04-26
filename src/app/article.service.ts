import {Injectable, InjectionToken} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {IArticle} from "./app.model";


export interface IArticleService {

  getArticles(type: number): Observable<Array<IArticle>>;

}
export const ARTICLE_SERVICE = new InjectionToken<IArticleService>('ARTICLE_SERVICE');
