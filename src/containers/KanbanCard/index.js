/*jshint esversion:6*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCard, updateCard } from '../../actions';
import Card from '../../components/Card';
import '../App/App.css';

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
          'backgroundColor':'#F56E70'
        };
      case 'Medium' :
        return {
          'backgroundColor':'#66AB8C'
        };
      case 'Low' :
        return {
          'backgroundColor':'#F7E8A4'
        };
      default:
        return {
          'backgroundColor':'#cccccc'
        };
    }
  }

  render() {
    if(this.state.editCard) {
      return (
        <form
          className="edit-card-form"
          style={ this.setPriorityColor(this.state.priority) }
          >
          <input
            className="close-edit-form"
            type="button"
            onClick={ this.handleEditButton }
            value="✖"
            />
          <h3 className="edit-task-title">
            Edit Task:
          </h3>
          <input
            className="edit-input"
            placeholder="Edit Task"
            type="text"
            name="title"
            value={ this.state.title }
            onChange={ this.handleChange }
          />
          <input
            className="edit-input"
            placeholder="Assign To New Person"
            type="text"
            name="assignedTo"
            value={ this.state.assignedTo }
            onChange={ this.handleChange }
          />
          <input
            className="edit-input"
            placeholder="Edited By"
            type="text"
            name="createdBy"
            value={ this.state.createdBy }
            onChange={ this.handleChange }
          />
          <select
            className="edit-input"
            type="text"
            name="priority"
            value={ this.state.priority }
            onChange={ this.handleChange }>
            <option value="Low">
              Low
            </option>
            <option value="Medium">Medium
            </option>
            <option value="High">
              High
            </option>
            <option value="Blocker">Blocker
            </option>
          </select>
          <select
            className="edit-input"
            type="text"
            name="status"
            value={ this.state.status }
            onChange={ this.handleChange }>
            <option value="Queue">Queue</option>
            <option value="Progress">Progress</option>
            <option value="Done">Done</option>
          </select>
          <br />
          <input
            className="save-button"
            type="submit"
            value="Save Edit"
            onClick={ this.handleEditInput.bind(this) }
            id={ parseInt(this.state.id, 10) }
            />
          <input
            className="delete-button"
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
          >
            <Card
              cards={ this.props }
              handleEditButton={ this.handleEditButton }
            />

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