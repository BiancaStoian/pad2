import { BrowserModule } from '@angular/platform-browser';
import {forwardRef, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import {ArticleServiceProvider} from "./article-file.service";
import { CosComponent } from './cos/cos.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    CosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [forwardRef(() => ArticleServiceProvider)],
  bootstrap: [AppComponent]
})
export class AppModule { }
