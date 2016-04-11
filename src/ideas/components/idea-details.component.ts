import { FormBuilder, Validators } from 'angular2/common';
import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { IdeaService } from '../../shared/services/idea.service';
import { Idea, AppStore } from '../models/idea';

@Component({
  selector: 'idea-details',
  templateUrl: './idea-details.component.html',
  moduleId: module.id
})

export class IdeaDetailsComponent implements OnInit {
  ideaSubscription: Observable<Idea>;
  idea: Idea;
  ideaForm: Object;
  originalName: string;
  selectedIdea: Idea;
  constructor(private _params: RouteParams,
              private fb: FormBuilder,
              private _store: Store<AppStore>,
              private _ideaService: IdeaService,
              private _router: Router) {
                this.ideaSubscription = _store.select('selectedIdea');
                this.ideaSubscription.subscribe(idea => this.selectedIdea = idea);
                this.ideaForm = fb.group({
                  title: [this.selectedIdea.title, Validators.required],
                  body: [this.selectedIdea.body, Validators.required]
                });
              }
  ngOnInit() {
    let id = this._params.get('id');
    this._ideaService.getIdea(id)
      .subscribe(
        (idea) => {
          this.idea = idea;
    });
  }
  onUpdate(ideaForm) {
    this._ideaService.updateIdea(ideaForm.id, ideaForm.title, ideaForm.body);
    this._router.navigate(['IdeasComponent']);
  }
}
