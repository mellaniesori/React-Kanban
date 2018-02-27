import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCards } from '../../actions';
import Board from '../Board';
import CardForm from '../CardForm';
import Header from '../../components/Header';
import './App.css';

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
    this.props.loadCards();
  }

  render() {
    return (
      <div className="main-grid">
        <Header />
        <Board />
        <CardForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards
});

const mapDispatchToProps = dispatch => ({
  loadCards: () => dispatch(loadCards())
});

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
