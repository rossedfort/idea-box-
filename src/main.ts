import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app/components/app.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

import 'rxjs/Rx';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS
]);
