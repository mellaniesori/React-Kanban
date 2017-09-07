/*jshint esversion:6*/
import React from "react";

const Card = ({ cards, closeDescription }) =>
  <div>
    <h3>
      Title: { cards.title }
    </h3>
    <p>
      Priority: { cards.priority }
    <br />
      Assigned To: { cards.assignedTo }
    <br />
      Created By: { cards.createdBy }
    </p>
  </div>;

export default Card;