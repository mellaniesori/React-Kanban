/*jshint esversion:6*/
import * as types from '../constants';

import axios from "axios";
var querystring = require('querystring');

let nextCardId = 0;

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
      console.log('add : ', cards)
      dispatch({
        type: types.ADD_CARD,
        cards: cards.data
      })
    })
  }
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


// export const loadCards = () => {
//   return (dispatch) => {
//     new Promise((resolve, reject) => {
//     var oReq = new XMLHttpRequest()
//     oReq.addEventListener("load", function() {
//       console.log(this)
//       resolve(this.responseText)
//     })
//     oReq.open("GET", "/cards")
//     oReq.send()
//   })
// }
// }