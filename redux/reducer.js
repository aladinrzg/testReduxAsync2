import {combineReducers} from 'redux';
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCES,
} from './types';

const initialState = {
  loadind: false,
  users: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {...state, loading: true};

    case FETCH_USERS_SUCCES:
      return {loading: false, users: action.payload, error: ''};

    case FETCH_USERS_FAILURE:
      return {loading: false, users: [], error: action.payload};
  }
};

const rootReducer = combineReducers({
  user: reducer,
});

export default rootReducer;
