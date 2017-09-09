/*jshint esversion:6*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCard, updateCard } from '../../actions';
import Card from '../../components/Card';

class KanbanCard extends Component{
  constructor(props) {
    super(props);

    this.state = {
      editCard: false,
      id: this.props.id,
      title: this.props.title,
      assignedTo: this.props.assignedTo,
      createdBy: this.props.createdBy,
      priority: this.props.priority,
      status: this.props.status
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEditButton = this.handleEditButton.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleDelete(evt) {
    this.props.deleteCard(evt.target.id);
  }

  handleEditButton(evt) {
    evt.preventDefault();
    this.setState({
      editCard: !this.state.editCard
    });
  }

  handleEditInput(evt) {
    evt.preventDefault();
    this.props.updateCard(this.state.id, this.state);
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
          'backgroundColor':'#ffffff'
        };
    }
  }

  handleDrag(evt) {
    evt.preventDefault();
    if (evt.clientX / window.innerWidth < 0.28) {
      this.props.updateCard({id: this.state.id, status: 'Queue'});
    } else if (evt.clientX / window.innerWidth < 0.61) {
      this.props.updateCard({id: this.state.id, status: 'Progress'});
    } else if (evt.clientX / window.innerWidth < 1) {
      this.props.updateCard({id: this.state.id, status: 'Done'});
    } else {
      return;
    }
  }

  render() {
    if(this.state.editCard) {
      return (
        <form
          className="edit-card-form"
          style={ this.setPriorityColor(this.state.priority) }
          >
          <Card
          cards={ this.state }
        /><br />
          <input
            className="close-edit-form"
            type="button"
            onClick={ this.handleEditButton }
            value="✖"
            />
          <h1>
            Edit
          </h1>
          <input
            className="edit-title"
            placeholder="Edit Task"
            type="text"
            name="title"
            value={ this.state.title }
            onChange={ this.handleChange }
          />
            <br />
          <input
            className="edit-title"
            placeholder="Assign To New Person"
            type="text"
            name="assignedTo"
            value={ this.state.assignedTo }
            onChange={ this.handleChange }
          />
          <input
            className="edit-title"
            placeholder="Edited By"
            type="text"
            name="createdBy"
            value={ this.state.createdBy }
            onChange={ this.handleChange }
          />
          <select
            className="edit-priority"
            type="text"
            name="priority"
            value={ this.state.priority }
            onChange={ this.handleChange }>
            <option disabled value="Base">Choose Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <select
            className="edit-status"
            type="text"
            name="status"
            value={ this.state.status }
            onChange={ this.handleChange }>
            <option disabled value="Base">Choose Status</option>
            <option value="Queue">Queue</option>
            <option value="Progress">Progress</option>
            <option value="Done">Done</option>
          </select>
          <br />
          <input
            type="submit"
            value="Save Edit"
            onClick={ this.handleEditInput.bind(this) }
            id={ parseInt(this.state.id, 10) }
            />
          <input
            type="button"
            onClick={ this.handleDelete }
            value="Delete Card"
            id={ parseInt(this.state.id, 10) }
            />
        </form>
      )
    } else {
      return (
        <div
          className="each-card"
          style={ this.setPriorityColor(this.state.priority) }
          draggable="true"
          onDragEnd={ this.handleDrag.bind(this) }
          >
            <Card
              cards={ this.state }
            />
            <button onClick={ this.handleEditButton }>
                Edit Task
            </button>
        </div>
      )
    }
  }

};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteCard: id => dispatch(deleteCard(id)),
  updateCard: (id, card) => dispatch(updateCard(id, card))
})

const ConnectedKanbanCard = connect(
  null,
  mapDispatchToProps
)(KanbanCard);

export default ConnectedKanbanCard;