import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCES,
} from './types';
import axios from 'axios';

// action creators
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCES,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        /*response.data is the array of users */

        const users = response.data; //.map((user) => user.name);

        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        // error.message is our error

        dispatch(fetchUsersFailure(error.message));
      });
  };
};
