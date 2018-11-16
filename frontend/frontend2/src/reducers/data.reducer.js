import { ADD_DATA } from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_DATA:
      return state.concat(['hola']);
    default:
      return state;
  }
};
