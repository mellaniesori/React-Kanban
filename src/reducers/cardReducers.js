/*jshint esversion:6*/
import * as types from '../constants';

const cardReducer = (state = [], action) => {
  console.log("hitting reducer", action);
  switch (action.type) {
    case types.ADD_CARD:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          description: action.description,
          priority: action.priority,
          createdBy: action.createdBy,
          assignedTo: action.assignedTo,
          status: action.status
        }
      ];

    case types.DELETE_CARD:
      let filter = state.filter(card => card.id !== parseInt(action.id));
      return filter;

    case types.UPDATE_CARD:
      let updateCard = action.card;
      let newState = state.filter(card => card !== action.card.id);

      return [
        ...newState,
        {
          id : updateCard.id,
          title : updateCard.title,
          description : updateCard.description,
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