import React from 'react';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-left">
        <span className="header-badge"></span>
        <h1>Student <span>Scoreboard</span></h1>
      </div>
      <div className="header-status">
        <span className="status-dot"></span>
        <span>Live</span>
      </div>
    </header>
  );
};

export default Header;
