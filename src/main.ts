import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app/components/app.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {ideas} from './ideas/models/idea';
import { provideStore } from '@ngrx/store';

import 'rxjs/Rx';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provideStore({ideas})
]);
