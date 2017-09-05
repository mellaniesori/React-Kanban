/*jshint esversion:6*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCards } from '../../actions';
import Column from '../../components/Column';
import 'bulma/css/bulma.css';

class Board extends Component {
  componentWillMount() {
    this.props.loadCards(this.props.cards);
  }

  render() {
    const boardCards = this.props.cards;

    return (
      <div className="column">
        <Column
          cards={ boardCards.filter(card => card.status === 'Queue')}
          columnName="Queue"
        />
        <Column
          cards={ boardCards.filter(card => card.status === 'Progress')}
          columnName="Progress"
        />
        <Column
          cards={ boardCards.filter(card => card.status === 'Done')}
          columnName="Done"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cards : state.cards
})

const mapDispatchToProps = (dispatch) => ({
  loadCards: boardId => dispatch(loadCards(boardId))
})

const ConnectedBoardApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default ConnectedBoardApp;