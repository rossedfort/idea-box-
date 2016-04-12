import {Http, Response, Headers} from 'angular2/http';
import {Injectable}     from 'angular2/core';
import {Idea, AppStore}           from '../../ideas/models/idea';
import {Observable}     from 'rxjs/Observable';
import {Store} from '@ngrx/store';

@Injectable()
export class IdeaService {
  ideas: Observable<Array<Idea>>;
  constructor (private http: Http, private store: Store<AppStore>) {
    this.ideas = store.select('ideas');
  }

  private _ideasUrl = 'http://localhost:3000/api/v1/ideas';

  getIdeas () {
    this.http.get(this._ideasUrl)
      .map(res => res.json())
      .catch(this.handleError)
      .map(payload => ({ type: 'ADD_IDEAS', payload }))
      .subscribe(action => {
        this.store.dispatch(action);
      });
  }
  getIdea (id) {
    let url = `${this._ideasUrl}/${id}`;
    return this.http.get(url)
      .map(res => res.json())
      .catch(this.handleError);
  }
  createIdea (title, body): void {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let reqBody = JSON.stringify({ title, body });
    this.http.post(this._ideasUrl, reqBody, {headers: headers})
      .map(res => res.json())
      .catch(this.handleError)
      .map(payload => ({ type: 'CREATE_IDEA', payload }))
      .subscribe(action => this.store.dispatch(action));
  }
  updateIdea (id, title, body) {
    let headers = new Headers();
    let url = `${this._ideasUrl}/${id}`;
    headers.append('Content-Type', 'application/json');
    let reqBody = JSON.stringify( {idea: { id, title, body }});
    this.http.put(url, reqBody, {headers: headers})
      .map(res => res.json())
      .catch(this.handleError)
      .subscribe(payload => this.store.dispatch({ type: 'UPDATE_IDEA', payload: payload }));
  }
  deleteIdea(id){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    let url = `${this._ideasUrl}/${id}`;
    this.http.delete(url, headers)
      .map(res => res.json())
      .catch(this.handleError)
      .subscribe(payload => this.store.dispatch({ type: 'DELETE_IDEA', payload: payload }));
  }
  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
