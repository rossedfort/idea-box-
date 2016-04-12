import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Validators} from 'angular2/common';

import {IdeaService} from '../../shared/services/idea.service';

@Component({
  selector: 'idea-form',
  templateUrl: './idea-form.component.html',
  providers: [
    FORM_DIRECTIVES
  ],
  moduleId: module.id
})

export class IdeaFormComponent {
  public ideaForm: Object;
  public fb: FormBuilder;
  constructor(private _ideaService: IdeaService, fb: FormBuilder) {
    this.ideaForm = fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }
  onSubmit(ideaForm) {
    this._ideaService.createIdea(ideaForm.title, ideaForm.body);
  }
}
