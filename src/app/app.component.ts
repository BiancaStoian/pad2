import {Component, Inject} from '@angular/core';
import {IArticle, IBar} from './app.model';
import {BARS} from './app.data';
import {ARTICLE_SERVICE, IArticleService} from "./article.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private bars: Array<IBar>;
  private articles: Array<IArticle>;
  private tab: number = 1;
  constructor(){
    this.bars = BARS;
  }


  selectTab(x: number) {
    this.tab = x;
  }

  isSelected(x: number) {
    if (x === this.tab){

      return true;
    }
  }
}
