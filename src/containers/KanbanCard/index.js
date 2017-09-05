/*jshint esversion:6*/
import React, {Component} from 'react';
import Card from '../../components/Card';

class KanbanCard extends Component{

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  setPriorityColor(priority) {
    switch (priority) {
      case 'High' :
        return {
          'border':'2px solid #B71C1C',
          'backgroundColor':'#F06292'
        };
      case 'Medium' :
        return {
          'border':'2px solid #00695C',
          'backgroundColor':'#B2DFDB'
        };
      case 'Low' :
        return {
          'border':'2px solid #039BE5',
          'backgroundColor':'#E1F5FE'
        };
      default:
        return {
          'border':'2px solid #111111',
          'backgroundColor':'#f2ffe6'
        };
    }
  }

  render() {
    return (
      <div
        className="each-card"
        style={ this.setPriorityColor(this.props.cards.priority) }>
        <Card cards={ this.props.cards } />

        <button className="edit-button">
          Edit Task
        </button>
      </div>
    )
  }
};

export default KanbanCard;