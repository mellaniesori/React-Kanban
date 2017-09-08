/*jshint esversion:6*/
import * as types from '../constants';

const cardReducer = (state = [], action) => {
  console.log("hitting reducer", action);
  console.log('STATE: ', state);
  switch (action.type) {
    case types.LOAD_CARDS:
      return [
        ...action.cards
      ];

    case types.ADD_CARD:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          priority: action.priority,
          createdBy: action.createdBy,
          assignedTo: action.assignedTo,
          status: action.status
        }
      ];

    case types.DELETE_CARD:
      let filter = state.filter(card => card.id !== parseInt(action.id, 10));
      return filter;

    case types.UPDATE_CARD:
      let updateCard = action.card;
      let newState = state.filter(card => card !== action.card.id);

      return [
        ...newState,
        {
          id : updateCard.id,
          title : updateCard.title,
          priority : updateCard.priority,
          status : updateCard.status,
          createdBy : updateCard.createdBy,
          assignedTo : updateCard.assignedTo
        }
      ];

    default:
      return state;
  }
};

export default cardReducer;