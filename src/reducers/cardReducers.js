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
      return state.map(card => {
        if (card.id !== action.id) {
          console.log('updating : ', card);
          return card;
        }

        return {
          id: action.id,
          title: action.title,
          priority: action.priority,
          createdBy: action.createdBy,
          assignedTo: action.assignedTo,
          status: action.status
        };
      });

    default:
      return state;
  }
};

export default cardReducer;