import * as types from '../constants';

import axios from 'axios';
var querystring = require('querystring');

export const loadCards = cards => {
  return dispatch => {
    axios.get('/cards').then(cards => {
      dispatch({
        type: types.LOAD_CARDS,
        cards: cards.data
      });
    });
  };
};

export const addCard = cards => {
  return dispatch => {
    axios.post('/cards', querystring.stringify(cards)).then(cards => {
      dispatch({
        type: types.LOAD_CARDS,
        cards: cards.data
      });
    });
  };
};

export const deleteCard = id => {
  let deleteID = parseInt(id, 10);
  return dispatch => {
    axios.delete(`/${deleteID}`).then(cards => {
      dispatch({
        type: types.LOAD_CARDS,
        cards: cards.data
      });
    });
  };
};

export const updateCard = (id, updatedCard) => {
  let editId = parseInt(id, 10);
  return dispatch => {
    axios.put(`/${editId}`, querystring.stringify(updatedCard)).then(cards => {
      dispatch({
        type: types.LOAD_CARDS,
        cards: cards.data
      });
    });
  };
};
