/* jshint esversion:6 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../actions/Users.js';

class NewUser extends Component {
  constructor() {
    super();

    // app claws local initial state
    this.state = {
      userInput: ''
    };
  }

  submitUser(evt) {
    console.log(this.state.userInput);
    this.props.addUser(this.state.userInput);
  }

  handleNewUserInput(evt) {
    console.log('handle new user');
    this.setState({
      userInput: evt.target.value
    });
  }

  render() {
    return (
      <div>
      <input
        type="text"
        placeholder="new name"
        onChange={this.handleNewUserInput.bind(this)}
      />
      <button onClick={this.submitUser.bind(this)}>Submit</button>
      </div>
    )
  }

}


const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => {
      dispatch(addUser(user));
    }
  };
};

const ConnectedNewUser = connect(
  null,
  mapDispatchToProps
)(NewUser);

export default ConnectedNewUser;