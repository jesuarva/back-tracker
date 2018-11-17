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
        dispatch({
          type: A.ADD_DATA,
          data,
        });
      })
      .catch((e) => console.log('error', e));
  };
};

/**
 * This acton creator is connecting and creating a new document in the DataBase
 * but is no properly dispatching the 'actions' - I couldn't find the issue
 */
export const addingItem = (newItem) => {
  console.log(newItem);
  const addItem = axios.post(DATA_URL, newItem);
  return (dispatch) => {
    dispatch({
      type: A.ADDING_ITEM,
    });
    addItem
      // Its no reaching this then
      .then((response) => {
        console.log('POST response.data', response.data);
        console.log(response.data['Document(s) created']);
        console.log('newItem', newItem);
        dispatch({
          type: A.ADDED_ITEM,
        });
        return response.data['Document(s) created'];
      })
      .then((data) => {
        console.log(data);
        dispatch({
          type: A.ADD_DATA,
          data,
        });
      })
      .catch((e) => {
        console.log('error', e);
        dispatch(errorAction(e));
      });
  };
};
