/*jshint esversion:6*/

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const UPDATE_CARD = 'UPDATE_CARD';

export const loadCards = (cards) => {
  console.log('LOADING CARDS: ', cards);
  return {
    type : LOAD_CARDS,
    cards : cards
  };
};

export const addCard = (cards) => {
  console.log('ACTION adding new card: ', cards);
  return {
    type : ADD_CARD,
    cards : cards
  };
};

export const deleteCard = (card) => {
  console.log('ACTION deleting card: ', card);
  return {
    type : DELETE_CARD,
    card : card
  };
};

export const updateCard = (card) => {
  console.log('ACTION updating card: ', card);
  return {
    type : UPDATE_CARD,
    card : card
  };
};