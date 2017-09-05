/*jshint esversion:6*/
import React from 'react';

const Card = ({ cards }) => {
  return (
    <div className="card-description">
      <p>Ticket #: { cards.id }</p>
      <p>Task: { cards.title }</p>
      <p>Description: { cards.description }</p>
      <p>Assigned To: { cards.assignedTo }</p>
      <p>Created By: { cards.createdBy }</p>
      <p>Priority: { cards.priority }</p>
    </div>
  );
};

export default Card;