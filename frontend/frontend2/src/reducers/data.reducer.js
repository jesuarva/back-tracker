import * as A from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case A.ADD_DATA:
      return state.concat([action.data]);
    default:
      return state;
  }
};
