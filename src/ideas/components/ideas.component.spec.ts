import { it, describe, expect, inject, beforeEachProviders } from 'angular2/testing';
import { IdeasComponent } from './ideas.component';
import { IdeaService } from '../../shared/services/idea.service';
import { BaseRequestOptions, Http } from 'angular2/http';
import {Location, Router, RouteRegistry, ROUTER_PRIMARY_COMPONENT} from 'angular2/router';
import { Observable } from 'rxjs/Rx';
import { provide } from 'angular2/core';
import { MockBackend } from 'angular2/http/testing';
import {SpyLocation} from 'angular2/src/mock/location_mock';
import {RootRouter} from 'angular2/src/router/router';


export function main () {
  describe('Ideas Component', () => {
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
      IdeasComponent,
      provide(IdeaService, {useClass: MockIdeaData}),
      RouteRegistry,
      provide(Location, { useClass: SpyLocation }),
      provide(ROUTER_PRIMARY_COMPONENT, { useValue: IdeasComponent }),
      provide(Router, { useClass: RootRouter }),
    ]);

    it('Should create an instance of Ideas Component', inject([IdeasComponent], (ideasComponent) => {
      expect(ideasComponent).toBeDefined();
    }));

    it('Should have the ngOnInit() and getIdeas() methods available', inject([IdeasComponent], (ideasComponent) => {
      spyOn(ideasComponent.ideaService, 'getIdeas');
      ideasComponent.ngOnInit();
      expect(ideasComponent.ideaService.getIdeas).toHaveBeenCalled();
    }));
  });

  function MockResponse() {
    return [{'id':1,'title':'No Snow','body':'Maybe if we shoot fire into the air the snow will stop',
            'quality':'swill','created_at':'2016-03-31T21:37:05.798Z','updated_at':'2016-03-31T21:37:05.798Z'},
            {'id':2,'title':'wowowo','body':'soooo good','quality':'swill','created_at':'2016-04-01T15:01:28.452Z',
            'updated_at':'2016-04-01T15:01:28.452Z'}];
  }
}
