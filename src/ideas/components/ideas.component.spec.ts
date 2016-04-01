import { it, describe, expect, inject, beforeEachProviders } from 'angular2/testing';
import { IdeasComponent } from './ideas.component';

describe('Ideas Component', () => {
  beforeEachProviders(() => [
    IdeasComponent
  ]);

  it('Should create an instance of Ideas Component',
   inject([IdeasComponent], (component) => {
    expect(true);
  }));
});
