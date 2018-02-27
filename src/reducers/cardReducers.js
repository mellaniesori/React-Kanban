import * as types from '../constants';

const cardReducer = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_CARDS:
      return [...action.cards];

    default:
      return state;
  }
};

export default cardReducer;
