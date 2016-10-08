import Immutable from 'immutable';
import * as types from '../actions/actionTypes';

import userId from './userId';
import postList from './postList';
import comment from './comment';
// import other reducers

// define other reducers

const reducers = {
  postList,
  comment,
  userId,
  // list up all reducers
};

// this file exports a mere object, which is to be combined at app.js later
export default reducers;
