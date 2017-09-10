/*jshint esversion:6*/
import React from "react";

const Card = ({ cards, handleEditButton }) =>
  <div className="card-component">
    <p className="card-title">
      { cards.title }
    </p>
    <p className="column-details">
      Priority: { cards.priority }
    <br />
      Assigned By: { cards.createdBy }
    </p>

    <div className="card-footer">
      <button
        className="edit-task-button"
        onClick={ handleEditButton }>
        Edit Task
      </button>
      { cards.assignedTo }
    </div>
  </div>;

export default Card;