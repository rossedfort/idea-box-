import {Router} from 'angular2/router';
import {Component, OnInit} from 'angular2/core';

import {Idea} from '../models/idea';
import {IdeaService} from '../../shared/services/idea.service';
import {IdeaDetailsComponent} from './idea-details.component';

@Component({
    selector: 'ideas',
    templateUrl: './ideas.component.html',
    directives: [IdeaDetailsComponent],
    moduleId: module.id
})

export class IdeasComponent implements OnInit {
  constructor(public ideaService: IdeaService,
              private _router: Router) {}
  errorMessage: string;
  ideas:Idea[];
  ngOnInit() { this.getIdeas(); };
  getIdeas() {
    this.ideaService.getIdeas();
  }
  goToDetails(idea) {
    this._router.navigate(['IdeaDetails', { id: idea.id }]);
  }
}
