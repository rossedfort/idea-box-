import { it, describe, expect, inject, beforeEachProviders } from 'angular2/testing';
import { IdeaFormComponent } from './idea-form.component';
import { IdeaService } from '../../shared/services/idea.service';
import { ideas, selectedIdea } from '../models/idea';

import { BaseRequestOptions, Http } from 'angular2/http';
import { Observable } from 'rxjs/Rx';
import { provide } from 'angular2/core';
import { MockBackend } from 'angular2/http/testing';
import { provideStore } from '@ngrx/store';

export function main () {
  describe('Idea Form Component', () => {
    class MockIdeaData {
      public getIdeas() {
        return Observable.of(MockResponse());
      }
    }
    beforeEachProviders(() => [
      provide(Http, {
        useFactory: (backend, defaultOptions) => new Http(backend, defaultOptions),
        deps: [MockBackend, BaseRequestOptions]
      }),
      IdeaFormComponent,
      provide(IdeaService, {useClass: MockIdeaData}),
      provideStore({ideas: ideas, selectedIdea: selectedIdea})
    ]);

    it('Should have an onSubmit() method', inject([IdeaFormComponent], (ideaFormComponent) => {
      expect(ideaFormComponent).toBeDefined();
      expect(ideaFormComponent.onSubmit).toBeDefined();
    }));
  });

  function MockResponse() {
    return [{'id':1,'title':'No Snow','body':'Maybe if we shoot fire into the air the snow will stop',
            'quality':'swill','created_at':'2016-03-31T21:37:05.798Z','updated_at':'2016-03-31T21:37:05.798Z'},
            {'id':2,'title':'wowowo','body':'soooo good','quality':'swill','created_at':'2016-04-01T15:01:28.452Z',
            'updated_at':'2016-04-01T15:01:28.452Z'}];
  }
}
