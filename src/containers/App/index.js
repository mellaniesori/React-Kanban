/* jshint esversion:6 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserList from '../../components/UserList.js';
import NewUser from '../NewUser';

class App extends Component {
  render() {
    console.log('checking props..', this.props);

    return (
      <div>
        <h1>Hello World!</h1>
        <UserList
          users={this.props.users}
        />
        <NewUser />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    users : state.users
  }
}

const ConnectedApp = connect(
  mapStateToProps
)(App);

export default ConnectedApp;
