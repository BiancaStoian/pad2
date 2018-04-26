import { TestBed, inject } from '@angular/core/testing';

import { ArticleFileService } from './article-file.service';

describe('ArticleFileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleFileService]
    });
  });

  it('should be created', inject([ArticleFileService], (service: ArticleFileService) => {
    expect(service).toBeTruthy();
  }));
});
