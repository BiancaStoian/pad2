import {Component, Input, OnInit} from '@angular/core';
import {IArticle} from "../app.model";
import {IBar} from "../app.bar";
@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})


export class TabsComponent implements OnInit {
  @Input() bar: IBar;
  constructor() {
  }
  ngOnInit() {
  }

}
