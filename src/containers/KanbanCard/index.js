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
      description: this.props.description,
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
    console.log('editing', this.state);
    this.props.updateCard(this.state);
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

  render() {
    if(this.state.editCard) {
      return (
        <form
          className="edit-card-form"
          style={ this.setPriorityColor(this.props.priority) }
          >
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
          <textarea
            className="edit-description"
            placeholder="Edit Description"
            type="text"
            name="description"
            value={ this.state.description }
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
            onChange={ this.handleChange.bind(this) }>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Urgent">Urgent</option>
          </select>
          <input
            type="submit"
            value="Save Edit"
            onClick={ this.handleEditInput.bind(this) }
            id={ this.state.id }
            />
          <input
            type="button"
            onClick={ this.handleDelete }
            value="Delete Card"
            id={ this.state.id }
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
  updateCard: card => dispatch(updateCard(card))
})

const ConnectedKanbanCard = connect(
  null,
  mapDispatchToProps
)(KanbanCard);

export default ConnectedKanbanCard;