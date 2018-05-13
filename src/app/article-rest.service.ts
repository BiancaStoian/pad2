import {Injectable, Provider} from '@angular/core';
import {ARTICLE_SERVICE, IArticleService} from "./article.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {IArticle, ICartItem} from "./app.model";
import {Headers, RequestOptions} from "@angular/http";

@Injectable()
export class ArticleRestService implements IArticleService {

  private url: string = "http://192.168.43.94:8080/products";

  constructor(private http: HttpClient) {
  }

  getArticles(type: number): Observable<Array<IArticle>> {
    return this.http.get<Array<IArticle>>(this.url).map((art)=>{

      return art.filter(article => article.type === type);
    });
  }

  buyArticles(articles: Array<ICartItem>): void {
    let body = JSON.stringify(articles);

    this.http.post(this.url,body,{
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*",

      }}).map((res:Response)=>res.json()).subscribe();
    //.map(this.extractData).catch(this.handleErrorObservable);
  }

  //   'Accept':"application/json",
  //   "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS, POST, PUT",
  //    "Access-Control-Allow-Headers":"Content-Type"}
/*
  extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
*/

}
export const ArticleServiceProvider: Provider = {
  provide: ARTICLE_SERVICE,
  useClass: ArticleRestService
};

