/* jshint esversion:6 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bulma/css/bulma.css';
import { loadCards } from '../../actions';
import Board from '../Board';
import CardForm from '../CardForm';
import Header from '../../components/Header';

class App extends Component {
  constructor() {
    super();

    this.state = {
      id: '',
      title: '',
      assignedTo: '',
      createdBy: '',
      priority: '',
      status: ''
    };
  }
  componentWillMount() {
    console.log('APP PROPS:', this.props.cards);
    this.props.loadCards();
  }

  render() {
    return (
      <div className="container is-mobile">
        <Header />
        <Board />
        <CardForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cards: state.cards
})

const mapDispatchToProps = (dispatch) => ({
  loadCards: () => dispatch(loadCards())
})

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;