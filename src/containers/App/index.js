/* jshint esversion:6 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCards } from '../../actions';
import Board from '../Board';
import CardForm from '../CardForm';
import 'bulma/css/bulma.css';

class App extends Component {
  componentWillMount() {
    this.props.loadCards(this.props.cards);
  }

  render() {
    return (
      <div className="container">
        <Board />
        <CardForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('STATE', state);
  return {
    cards : state.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCards: (cards) => {
      dispatch(loadCards(cards))
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;