/* jshint esversion:6 */
import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Board from '../Board';
import CardForm from '../CardForm';
import Header from '../../components/Header';

class App extends Component {

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

export default App;