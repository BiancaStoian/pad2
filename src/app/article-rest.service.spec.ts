import { TestBed, inject } from '@angular/core/testing';

import { ArticleRestService } from './article-rest.service';

describe('ArticleRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleRestService]
    });
  });

  it('should be created', inject([ArticleRestService], (service: ArticleRestService) => {
    expect(service).toBeTruthy();
  }));
});
