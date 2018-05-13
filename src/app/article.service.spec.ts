import { TestBed, inject } from '@angular/core/testing';

import { IArticleService } from './article.service';
import {ArticleRestService} from "./article-rest.service";

describe('ArticleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleRestService]
    });
  });

  it('should be created', inject([ArticleRestService], (service: IArticleService) => {
    expect(service).toBeTruthy();
  }));
});
