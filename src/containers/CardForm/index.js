/*jshint esversion: 6*/
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions';

class CardForm extends Component {
  constructor() {
    super();

    this.setState({
      priority: 'Base',
      status: 'Base'
    });
  }

  handleSubmit(evt) {
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
      <div id="wrap">
      <div className="modal">
      <form
        className="card-form"
        onSubmit={ this.handleSubmit.bind(this) }
      >
        <p>
          Enter New Task:
        </p>
        <br />
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={ this.props.title }
          onChange={ this.handleChange.bind(this) }
        />
        <br />
        <input
          type="text"
          name="assignedTo"
          placeholder="Assigned To"
          value={ this.props.assignedTo }
          onChange={ this.handleChange.bind(this) }
        />
        <br />
        <input
          type="text"
          name="createdBy"
          placeholder="Created By"
          value={ this.props.createdBy }
          onChange={ this.handleChange.bind(this) }
        />
        <br />

        <p>
          Priority:
        </p>
        <select
          className="priority-options"
          name="priority"
          value={ this.props.priority }
          onChange={ this.handleChange.bind(this) }
        >
          <option value="Base">
            Choose Priority
          </option>
          <option value="Low">
            Low
          </option>
          <option value="Medium">
            Medium
          </option>
          <option value="High">
            High
          </option>
          <option value="Blocker">Blocker
          </option>
        </select>

        <p>
          Status:
        </p>
        <select
          className="status-options"
          name="status"
          onChange={ this.handleChange.bind(this) }
          value={ this.props.status }
        >
          <option value="Base">Choose Status</option>
          <option value="Queue">Queue</option>
          <option value="Progress">Progress</option>
          <option value="Done">Done</option>

        </select>
        <br />
        <br />
        <button id="submit-input">
            Create Card
        </button><br />

        <a className="close-form" href="#">CLOSE</a>
      </form>
      </div>
      </div>
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