import * as A from '../actions/actionTypes';

const initialState = {
  error: null,
  fetching_data: false,
  fetched_data: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case A.ERROR:
      return {
        ...state,
        fetching_data: false,
        fetched_data: false,
        error: true,
      };

    case A.FETCHING_DATA:
      return {
        ...state,
        fetching_data: true,
        fetched_data: false,
        error: null,
      };
    case A.FETCHED_DATA:
      return {
        ...state,
        fetching_data: false,
        fetched_data: true,
        error: null,
      };
    default:
      return state;
  }
};
