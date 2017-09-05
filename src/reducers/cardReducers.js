/*jshint esversion:6*/
import { LOAD_CARDS, ADD_CARD, DELETE_CARD, UPDATE_CARD } from '../actions';

const initialState = [];

const cards = (state = initialState, action) => {
  switch(action.type) {

    case LOAD_CARDS:
      return [
      ...action.cards
      ];

    case ADD_CARD:
      return [
      ...state,
      action.cards
      ];

    case DELETE_CARD:
      return [...state.cards, action.card].filter(card => card.id !== action.id)
      ;

    case UPDATE_CARD:
      return {
        cards: [...state.cards, action.card].filter(card => card.id !== action.card.id).concat([action.card])
      };

    default:
      return state;

  }// switch ends
};

export default cards;

