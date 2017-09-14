/*jshint esversion:6*/
import React from "react";
import '../containers/App/App.css';

const Header = () => {
  return (
    <div className="header-bar">
      <p>
        KANBAN
      </p>
      <a href="#wrap">
      <button
        className="open">
          NEW TASK
      </button>
      </a>
  </div>
  )
}

export default Header;