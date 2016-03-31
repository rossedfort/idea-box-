import {Component} from 'angular2/core';

import {IdeaService} from '../../shared/services/idea.service';
import {IdeasComponent} from '../../ideas/components/ideas.component';
import {IdeaFormComponent} from '../../ideas/components/idea-form.component';

@Component({
    selector: 'idea-box-angular',
    template: '<h1 class="center" style="text-align: center">Welcome to Idea Box - Angular</h1><idea-form></idea-form><ideas></ideas>',
    providers: [
      IdeaService
    ],
    directives: [IdeaFormComponent, IdeasComponent]
})

export class AppComponent { }
