/*jshint esversion:6*/
import { ADD_USER, REMOVE_USER } from '../actions/Users.js';

const initialState = { users: [] };

const users = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      // return the schema of the state store
      return {
        users: [...state.users, action.users]
      };

    case REMOVE_USER:
      return {
        users: this.users.filter(users)
      };

    default:
      return state;
  }

};

export default users;