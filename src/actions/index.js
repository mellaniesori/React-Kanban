/*jshint esversion:6*/
import * as types from '../constants';

import axios from "axios";
var querystring = require('querystring');

export const loadCards = (cards) => {
  return (dispatch) => {
    axios.get('/cards')
      .then((cards) => {
        dispatch({
          type: types.LOAD_CARDS,
          cards: cards.data
        });
      });
  };
};

export const addCard = cards => {
  return (dispatch) => {
    axios.post('/cards', querystring.stringify(cards))
      .then((cards) => {
        console.log('add : ', cards);
        dispatch({
          type: types.LOAD_CARDS,
          cards: cards.data
        });
      });
  };
};

export const deleteCard = id => {
  let deleteID = parseInt(id, 10);
  return (dispatch) => {
    axios.delete(`/cards/${deleteID}/edit`)
      .then((cards) => {
        console.log('delete : ', cards);
        dispatch({
          type: types.LOAD_CARDS,
          cards: cards.data
        });
      });
  };
};

export const updateCard = (id, edited) => {
  let editId = parseInt(id, 10);
    return (dispatch) => {
      axios.put(`/cards/${editId}/edit`, querystring.stringify(edited))
      .then((cards) => {
        dispatch({
          type: types.LOAD_CARDS,
          cards: cards.data
        });
      });
    };
};