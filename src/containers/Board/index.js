/*jshint esversion:6*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Column from '../../components/Column';
import './Board.css';

class Board extends Component {
  render() {
    const boardCards = this.props.cards;
    return (
      <div className="column-container">
        <Column
          cards={ boardCards }
          columnName="Queue"
        />
        <Column
          cards={ boardCards }
          columnName="Progress"
        />
        <Column
          cards={ boardCards }
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