/* jshint esversion:6 */
import React from 'react';
import KanbanCard from '../containers/KanbanCard';

const Column = ({ cards, columnName }) => {
  return (
    <div className={ columnName }>
      <h2 className="column-title">
        { columnName }
      </h2>
        {
          cards
            .filter(card => card.status === columnName)
            .map(card => <KanbanCard key={card.id} {...card} />)
        }
    </div>
  )
}

export default Column;