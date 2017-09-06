/* jshint esversion:6 */
import React, { Component } from 'react';
import Board from '../Board';
import CardForm from '../CardForm';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div className="column">
        <Board />
        <CardForm />
      </div>
    )
  }
}

export default App;