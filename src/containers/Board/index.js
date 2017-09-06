/*jshint esversion:6*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Column from '../../components/Column';

class Board extends Component {
  render() {
    const boardCards = this.props.cards;
    return (
      <div className="column">
        <Column
          cards={ boardCards.filter(card => card.status === 'Queue') }
          columnName="Queue"
        />
        <Column
          cards={ boardCards.filter(card => card.status === 'Progress') }
          columnName="Progress"
        />
        <Column
          cards={ boardCards.filter(card => card.status === 'Done') }
          columnName="Done"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cards : state.cards
})

const ConnectedBoardApp = connect(
  mapStateToProps
)(Board);

export default ConnectedBoardApp;