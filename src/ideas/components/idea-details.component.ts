import { FormBuilder, Validators } from 'angular2/common';
import { Component, OnInit, Input } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

import { IdeaService } from '../../shared/services/idea.service';
import { Idea } from '../models/idea';

@Component({
  selector: 'idea-details',
  templateUrl: './idea-details.component.html',
  moduleId: module.id
})

export class IdeaDetailsComponent implements OnInit {
  @Input() idea: Idea;
  public ideaForm: Object;
  constructor(private _params: RouteParams,
              private _ideaService: IdeaService,
              fb: FormBuilder,
              private _router: Router) {
    this.ideaForm = fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required]
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
    this._router.navigate(['IdeasComponent'])
  }
}
