import {Component, Input, OnInit} from '@angular/core';
import {IArticle} from "../app.model";

@Component({
  selector: 'app-cos',
  templateUrl: './cos.component.html',
  styleUrls: ['./cos.component.css']
})
export class CosComponent implements OnInit {
  @Input() article: IArticle;
  private articles: Array<IArticle>;
  constructor() {
    this.articles = null;
  }

  ngOnInit() {
  }

}
