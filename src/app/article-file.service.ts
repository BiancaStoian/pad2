import {Injectable, Provider} from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {ARTICLE_SERVICE, IArticleService} from "./article.service";
import {IArticle} from "./app.model";
import {ARTICOLE} from "./app.data";

@Injectable()
export class ArticleFileService implements IArticleService {

  constructor() {
  }

  getArticles(type: number): Observable<Array<IArticle>> {
    return Observable.create(observer => {
      observer.next(ARTICOLE.filter(article => article.type === type));
      observer.complete();
    });
  }

}

export const ArticleServiceProvider: Provider = {
  provide: ARTICLE_SERVICE,
  useClass: ArticleFileService
};
