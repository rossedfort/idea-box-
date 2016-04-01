import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app/components/app.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";

import 'rxjs/Rx';

bootstrap(AppComponent, [HTTP_PROVIDERS]);
