/*jshint esversion:6*/

export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const addUser = (users) => {
  return {
    type: ADD_USER,
    users: users
  };
};