/*jshint esversion: 6*/
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions';

class CardForm extends Component {
  constructor() {
    super();

    this.state = {
      key: '',
      title: '',
      description: '',
      assignedTo: '',
      priority: '',
      status: '',
      createdBy: ''
    };
  }

  createCardObj(stateObj) {
    return {
      key: stateObj.key,
      title : stateObj.title,
      description : stateObj.description,
      assignedTo: stateObj.assignedTo,
      priority : stateObj.priority,
      status : stateObj.status,
      createdBy : stateObj.createdBy
    };
  }

  handleSubmit(evt) {
    console.log('handleSubmit state : ', this.state);
    evt.preventDefault();
    this.props.addCard(this.state);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name] : evt.target.value
    });
  }

  render() {
    return (
      <form
        className="card-form"
        onSubmit={ this.handleSubmit.bind(this) }
      >
        <p> Enter New Task: </p>

        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={ this.props.cards.title }
          onChange={ this.handleChange.bind(this) }
        />

        <select
          className="priority-options"
          name="priority"
          value={ this.state.priority }
          onChange={ this.handleChange.bind(this) }
        >
          <option disabled value="Base">Choose Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select><br />

        <textarea
          name="description"
          placeholder="Description"
          value={ this.state.description }
          onChange={ this.handleChange.bind(this) }
        /><br />

        <input
          type="text"
          name="assignedTo"
          placeholder="Assigned To"
          value={ this.state.assignedTo }
          onChange={ this.handleChange.bind(this) }
        /><br />

        <input
          type="text"
          name="createdBy"
          placeholder="Created By"
          value={ this.state.createdBy }
          onChange={ this.handleChange.bind(this) }
        /><br />

        <select
          className="status-options"
          name="status"
          onChange={ this.handleChange.bind(this) }
          value={ this.state.status }
        >
          <option disabled value="Base">Choose Status</option>
          <option value="Queue">Queue</option>
          <option value="Progress">Progress</option>
          <option value="Done">Done</option>

        </select>

        <br /><br />

        <button
          id='submit-input'>
            Create Card
        </button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  cards : state.cards
})

const mapDispatchToProps = (dispatch) => ({
  addCard : card => dispatch(addCard(card))
})

const ConnectedCardForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardForm);

export default ConnectedCardForm;