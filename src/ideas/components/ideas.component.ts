import {Component, OnInit} from 'angular2/core';

import {Idea} from '../models/idea';
import {IdeaService} from '../../shared/services/idea.service';

@Component({
    selector: 'ideas',
    templateUrl: 'ideas/components/ideas.component.html'
})

export class IdeasComponent implements OnInit {
  constructor(public ideaService: IdeaService) { }

  errorMessage: string;
  ideas:Idea[];

  ngOnInit() { this.getIdeas(); }

  getIdeas() {
    this.ideaService.getIdeas();
  }
}
