/*jshint esversion:6*/
import React from "react";
import '../containers/App/App.css';

const Header = () => {
  return (
    <div className="header-bar">
      <p>
        KANBAN
      </p>
      <button
        className="open">
          <a href="#wrap">
            NEW TASK
          </a>
      </button>
  </div>
  )
}

export default Header;