import { Component } from '@angular/core';
import {IArticle} from "./app.model";
import {IBar} from "./app.bar";
import {BARS} from "./app.bars";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private bars: Array<IBar>;
  private tab: string = "Îmbrăcăminte";
  constructor() {
    this.bars = BARS;
  }

  selectTab(x: string) {
    this.tab = x;
  }

  isSelected(x: string) {
    return x === this.tab;
  }
}
