import React from 'react';
import Brother from '../Brother/Brother';
import Me from '../Me/Me';
import '../Grandpa/Grandpa.css'

const Father = ({ house, ornament }) => {
    return (
        <div>
            <h1>Father</h1>
            <p>{house}</p>
            <div className='kidsOfF'>
                <Me house={house} ornament={ornament}></Me>
                <Brother house={house}></Brother>
            </div>
        </div>
    );
};

export default Father;