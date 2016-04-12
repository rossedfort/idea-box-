export class Idea {
  constructor(
    public id: number,
    public title: string,
    public body: string) {}
}

export const ideas = (state: any = [], {type, payload}) => {
  switch (type) {
    case 'ADD_IDEAS':
      return payload;
    case 'CREATE_IDEA':
      return [...state, payload];
    case 'UPDATE_IDEA':
      return state.map(idea => {
        return idea.id === payload.id ? Object.assign({}, idea, payload) : idea;
      });
    case 'DELETE_IDEA':
      return state.filter(item => {
        return item.id !== payload.id;
      });
    default:
      return state;
  }
};

export const selectedIdea = (state: any = null, {type, payload}) => {
  switch (type) {
    case 'SELECT_IDEA':
      return payload;
    default:
      return state;
  }
};

export interface AppStore {
  ideas: Idea[];
  selectedIdea: Idea;
}
