import {Component, OnInit, Input} from 'angular2/core';
import { RouteParams } from 'angular2/router';

import {IdeaService} from '../../shared/services/idea.service';
import {Idea} from '../models/idea';

@Component({
  selector: 'idea-details',
  templateUrl: './idea-details.component.html',
  moduleId: module.id
})

export class IdeaDetailsComponent implements OnInit {
  @Input() idea: Idea;
  constructor(
    private _params: RouteParams,
    private _ideaService: IdeaService
  ) {}

  ngOnInit() {
    let id = this._params.get('id');
    this._ideaService.getIdea(id)
      .subscribe(
        (idea) => {
          this.idea = idea;
      })
  }
}
