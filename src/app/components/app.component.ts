import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouterOutlet} from 'angular2/router';

import {IdeaService} from '../../shared/services/idea.service';
import {IdeasComponent} from '../../ideas/components/ideas.component';
import {IdeaFormComponent} from '../../ideas/components/idea-form.component';
import {IdeaDetailsComponent} from '../../ideas/components/idea-details.component';

@Component({
    selector: 'idea-box-angular',
    template: `<h1 class="center" style="text-align: center">Welcome to Idea Box - Angular</h1>
               <idea-form></idea-form>
               <ideas></ideas>
               <router-outlet></router-outlet>`,
    providers: [
      IdeaService
    ],
    directives: [IdeaFormComponent, IdeasComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/idea/:id', name: 'IdeaDetails',   component: IdeaDetailsComponent}
])

export class AppComponent { }
