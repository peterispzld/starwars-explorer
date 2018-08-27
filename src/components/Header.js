import React from 'react';
import '../styles/header.css';

const Header = () => {
    return (
        <header className="jumbotron">
          <div className="container">
            <span className="logo" role="img" aria-label="Rocket">🚀</span>
            <h1 className="title">Starwars Explorer</h1>
          </div>
        </header>
    );
}

export default Header;