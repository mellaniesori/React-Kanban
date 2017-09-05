/*jshint esversion:6*/
import { combineReducers } from 'redux';
import cards from './cardReducers';

const reducers = combineReducers({
  cards
});

export default reducers;