import {Http, Response, Headers} from 'angular2/http';
import {Injectable}     from 'angular2/core';
import {Idea}           from '../../ideas/models/idea';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class IdeaService {
  public ideas: Idea[];
  constructor (private http: Http) {
    this.ideas = [];
  }

  private _ideasUrl = 'http://localhost:3000/api/v1/ideas';

  getIdeas (): void {
    this.http.get(this._ideasUrl)
      .map(res => res.json())
      .catch(this.handleError)
      .subscribe(
        ideas => this.ideas = ideas
    );
  }
  
  getIdea (id) {
    let url = `${this._ideasUrl}/${id}`;
    return this.http.get(url)
      .map(res => res.json())
      .catch(this.handleError);
  }

  createIdea (title, body): void {
    var headers = new Headers();

    headers.append('Content-Type', 'application/json');

    let reqBody = JSON.stringify({ title, body });

    this.http.post(this._ideasUrl, reqBody, {headers: headers})
      .map(res => res.json())
      .catch(this.handleError)
      .subscribe(
        (idea) => {
          this.ideas.push(idea);
      });
  }

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
