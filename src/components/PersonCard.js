import React from 'react';
import '../styles/person-card.css';

const PersonCard = ({ name, height, mass, eyeColor, cardClick }) => {
    return (
        <div className="card">
          <div className="card-top"></div>
          <div className="card-body">
            <h4 className="card-title">{ name }</h4>
            <ul className="card-text">
              <li><strong>Height</strong>: { height }</li>
              <li><strong>Mass</strong>: { mass }</li>
              <li><strong>Eye color</strong>: { eyeColor }</li>
            </ul>
          </div>
          <button 
          className="btn btn-md btn-dark" 
          type="button" 
          value={ name }
          onClick={ cardClick }>
          info
          </button>
        </div>
    );
}

export default PersonCard;