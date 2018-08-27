import React from 'react';
import '../styles/loading-animation.css';

const LoadingAnimation = () => {
    return (
        <div className="text-center">
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default LoadingAnimation;