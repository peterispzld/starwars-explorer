import React from 'react';
import PersonCard from './PersonCard';
import '../styles/person-card-list.css';

const PersonCardList = ({ people, cardClick }) => {
    return (
        <div>
            <div className="row">
                {
                    people.map((person, index) => {
                        return (
                            <PersonCard
                                className="col"
                                key={index}
                                name={person.name}
                                height={person.height}
                                mass={person.mass}
                                eyeColor={person.eye_color}
                                cardClick={cardClick}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default PersonCardList;