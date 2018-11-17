import * as A from './actionTypes';
import axios from 'axios';

const DATA_URL = process.env.REACT_APP_API || '/person-bags';

const errorAction = (error) => {
  return {
    type: A.ERROR,
    message: error.message,
  };
};

export const fetchingItems = () => {
  const fetching = axios.get(DATA_URL);
  return (dispatch) => {
    dispatch({ type: A.FETCHING_DATA });

    fetching
      .then((response) => {
        dispatch({ type: A.FETCHED_DATA });
        return response.data['Document(s) in database'];
      })
      .then((data) => {
        console.log(data);
        dispatch({
          type: A.ADD_DATA,
          data,
        });
      })
      .catch((e) => console.log('error', e));
  };
};
