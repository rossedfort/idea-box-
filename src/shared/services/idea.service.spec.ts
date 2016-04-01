import { it, describe, expect, inject, beforeEachProviders } from 'angular2/testing';
import { IdeaService } from '../../shared/services/idea.service';
import { BaseRequestOptions, Http } from 'angular2/http';
import { Observable } from 'rxjs/Rx';
import { provide } from 'angular2/core';
import { MockBackend } from 'angular2/http/testing';

export function main () {
  describe('Idea Service', () => {
    class MockIdeaData extends IdeaService {
      public getIdeas() {
        return Observable.of(MockResponse());
      }
    }
    beforeEachProviders(() => [
      provide(Http, {
        useFactory: (backend, defaultOptions) => new Http(backend, defaultOptions),
        deps: [MockBackend, BaseRequestOptions]
      }),
      provide(IdeaService, {useClass: MockIdeaData}),
      MockBackend,
      BaseRequestOptions
    ]);

    it('Should have a getIdeas() method that return ideas', inject([IdeaService], (ideaService) => {
      expect(ideaService.getIdeas().value).toEqual(MockResponse());
    }));
  });

  function MockResponse() {
    return [{'id':1,'title':'No Snow','body':'Maybe if we shoot fire into the air the snow will stop',
            'quality':'swill','created_at':'2016-03-31T21:37:05.798Z','updated_at':'2016-03-31T21:37:05.798Z'},
            {'id':2,'title':'wowowo','body':'soooo good','quality':'swill','created_at':'2016-04-01T15:01:28.452Z',
            'updated_at':'2016-04-01T15:01:28.452Z'}];
  }
}
