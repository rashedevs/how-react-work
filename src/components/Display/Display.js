import React from 'react';

const Display = (props) => {
    return (
        <div style={{ border: '2px solid green', margin: '10px' }}>
            <h2>Name: {props.name}</h2>
            <p>So far steps today: {props.steps}</p>
        </div>
    );
};

export default Display;