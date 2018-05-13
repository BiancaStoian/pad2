import {Injectable, Provider} from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {ARTICLE_SERVICE, IArticleService} from "./article.service";
import {IArticle, ICartItem} from "./app.model";
import {ARTICOLE} from "./app.data";
import {HttpClient} from "@angular/common/http";
import {RequestOptions} from "@angular/http";
import {Headers} from '@angular/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class ArticleFileService implements IArticleService {
  private url: string = "http://localhost:4200/products";
  constructor(private http: HttpClient) {
  }

  getArticles(type: number): Observable<Array<IArticle>> {
    return Observable.create(observer => {
      observer.next(ARTICOLE.filter(article => article.type === type));
      observer.complete();
    });
  }


  buyArticles(articles: Array<ICartItem>): void {

   /* this.http.post(this.url, articles)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );*/
   let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });
   this.http.post(this.url,articles).map(this.extractData).catch(this.handleErrorObservable);
  }

  extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}

export const ArticleServiceProvider: Provider = {
  provide: ARTICLE_SERVICE,
  useClass: ArticleFileService
};
