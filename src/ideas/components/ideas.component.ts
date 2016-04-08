import {Router} from 'angular2/router';
import {Observable} from 'rxjs/Observable';
import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Store} from '@ngrx/store';

import {Idea, AppStore} from '../models/idea';
import {IdeaService} from '../../shared/services/idea.service';
import {IdeaDetailsComponent} from './idea-details.component';

@Component({
    selector: 'ideas',
    templateUrl: './ideas.component.html',
    directives: [IdeaDetailsComponent, NgFor],
    moduleId: module.id,
})

export class IdeasComponent {
  public ideaSubscription: Observable<Array<Idea>>;;
  public ideas: any;
  constructor(public ideaService: IdeaService,
              private _router: Router,
              private _store: Store<AppStore>) {
                this.ideaService.getIdeas();
                this.ideas = ideaService.ideas;
              }
  goToDetails(idea) {
    this._router.navigate(['IdeaDetails', { id: idea.id }]);
  }
}
