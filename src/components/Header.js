/*jshint esversion:6*/
import React from "react";

const Header = ({ handleEditButton }) => {
  return (
    <nav className="header-bar">
      <p>KANBAN</p>
      <button handleEditButton={ handleEditButton }>
        NEW TASK
      </button>
  </nav>
  )
}

export default Header;