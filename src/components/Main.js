import React from 'react';
import PersonCardList from '../components/PersonCardList';

const Main = ({ people, cardClick }) => {
    return (
        <main className="container">
            <PersonCardList people={ people } cardClick={cardClick} />
        </main>
    );
}

export default Main;