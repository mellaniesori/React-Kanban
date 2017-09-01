/* jshint esversion:6 */
import React from 'react';
import UserItem from './UserItem.js';

const UserList = ({ users }) => {
  console.log('this is the user list component', users);
  return (
    <ul>
    {
      users.map(user => {
        return (
          <UserItem name={ user } />
        )
      })
    }
    </ul>
  )
};

export default UserList;