import React from 'react';

const ErrorMessage = ({ message }) => {
    return (
        <h5 className="text-center">Ooops, something went wrong... {message}!</h5>
    );
}

export default ErrorMessage;