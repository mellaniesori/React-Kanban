/*jshint esversion:6*/

export const LOAD_CARDS = 'LOAD_CARDS';
export const DELETE_CARD = 'DELETE_CARD';
export const UPDATE_CARD = 'UPDATE_CARD';

export const loadCards = (card) => {
  console.log('ACTION loading card: ', card);
  return {
    type : LOAD_CARDS,
    card : card
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