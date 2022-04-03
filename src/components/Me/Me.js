import React from 'react';
import Special from '../Special/Special';

const Me = ({ house, ornament }) => {
    return (
        <div>
            <h1>Me</h1>
            <p>{house}</p>
            <Special ornament={ornament}></Special>
        </div>
    );
};

export default Me;