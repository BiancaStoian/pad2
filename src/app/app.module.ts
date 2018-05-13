import { BrowserModule } from '@angular/platform-browser';
import {forwardRef, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import {ArticleServiceProvider} from "./article-rest.service";
import { CosComponent } from './cos/cos.component';
import {CartServiceProvider} from "./update-cart.service";
import {HttpClientModule} from "@angular/common/http";
import 'rxjs/add/operator/map';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    CosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [forwardRef(() => ArticleServiceProvider), CartServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
