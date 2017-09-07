/*jshint esversion:6*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCard, updateCard } from '../../actions';
import Card from '../../components/Card';

class KanbanCard extends Component{
  constructor() {
    super();

    this.state = {
      editCard: false,
      title: '',
      description: '',
      assignedTo: '',
      createdBy: '',
      priority: 'Base',
      status: 'Base'
    };

    this.handleDelete = this.handleDelete.bind(this);
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
    console.log('editing', this.props);
    evt.preventDefault();
    this.setState({
      editCard: false
    });
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
          'backgroundColor':'#f2ffe6'
        };
    }
  }

  render() {
    console.log('KANBAN STATE : ', this.state);
    if(this.state.editCard) {
      return (
        <form
          className="edit-card-form"
          style={ this.setPriorityColor(this.props.priority) }
          >
          <input
            className="close-edit-form"
            type="button"
            onClick={ this.handleEditButton.bind(this) }
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
            value={ this.props.title }
            onChange={ this.handleChange.bind(this) }
          />
            <br />
          <textarea
            className="edit-description"
            placeholder="Edit Description"
            type="text"
            name="description"
            value={ this.props.description }
            onChange={ this.handleChange.bind(this) }
            />
            <br />
          <input
            className="edit-title"
            placeholder="Assign To New Person"
            type="text"
            name="assignedTo"
            value={ this.props.assignedTo }
            onChange={ this.handleChange.bind(this) }
          />
          <input
            className="edit-title"
            placeholder="Edited By"
            type="text"
            name="createdBy"
            value={ this.props.createdBy }
            onChange={ this.handleChange.bind(this) }
          />
          <select
            className="edit-priority"
            type="text"
            name="priority"
            value={ this.props.priority }
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
            id={ this.props.id }
            />
          <input
            type="button"
            onClick={ this.handleDelete }
            value="Delete Card"
            id={ this.props.id }
            />
        </form>
      )
    } else {
      return (
        <div
          className="each-card"
          style={ this.setPriorityColor(this.props.priority) }
          >
            <Card
              cards={ this.props }
            />
            <button onClick={ this.handleEditButton.bind(this) }>
                Edit Task
            </button>
        </div>
      )
    }
  }

};

const mapStateToProps = (state) => ({
  cards : state.cards
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteCard: id => dispatch(deleteCard(id)),
  updateCard: card => dispatch(updateCard(card))
})

const ConnectedKanbanCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanCard);

export default ConnectedKanbanCard;