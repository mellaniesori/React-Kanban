import React from 'react';

const Card = ({ cards, handleEditButton }) => (
  <div className="card-component">
    <p className="card-title">{cards.title}</p>
    <p className="column-details">
      Priority: {cards.priority}
      <br />
      Assigned By: {cards.createdBy}
    </p>

    <div className="card-footer">
      <button className="edit-task-button" onClick={handleEditButton}>
        Edit Task
      </button>
      <p className="assigned-to">{cards.assignedTo}</p>
    </div>
  </div>
);

export default Card;
