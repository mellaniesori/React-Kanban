/* jshint esversion:6 */
import React from 'react';
import KanbanCard from '../containers/KanbanCard';
import 'bulma/css/bulma.css';

const Column = ({ cards, columnName }) => {
  return (
    <div>
      <h2 className="column-title">
        { columnName }
      </h2>
        {
          cards.map(card => <KanbanCard key={card.id} {...card} />)
        }
    </div>
  )
}

export default Column;