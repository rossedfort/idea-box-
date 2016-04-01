import { it, describe, expect, inject, beforeEachProviders } from 'angular2/testing';
import { IdeasComponent } from './ideas.component';

describe('Ideas Component', () => {
  it('Should create an instance of Ideas Component', () => {
    expect(IdeasComponent).toBeDefined();
  });

  it('Should have the ngOnInit() and getIdeas() method available', () => {
    expect(IdeasComponent.ngOnInit()).toBeDefined();
    expect(IdeasComponent.getIdeas()).toBeDefined();
  });
});
