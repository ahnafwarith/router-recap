import React from 'react';
import Brother from '../Brother/Brother';
import Me from '../Me/Me';
import '../Grandpa/Grandpa.css'

const Father = () => {
    return (
        <div>
            <h1>Father</h1>
            <div className='kidsOfF'>
                <Me></Me>
                <Brother></Brother>
            </div>
        </div>
    );
};

export default Father;