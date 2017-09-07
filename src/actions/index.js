/*jshint esversion:6*/
import * as types from '../constants';

let nextCardId = 0;

export const addCard = cards => {
  return {
    type: types.ADD_CARD,
    id: nextCardId++,
    ...cards
  };
};

export const deleteCard = id => {
  return {
    type: types.DELETE_CARD,
    id
  };
};

export const updateCard = card => {
  return {
    type: types.UPDATE_CARD,
    card
  };
};