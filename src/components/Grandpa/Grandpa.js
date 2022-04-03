import React from 'react';
import Aunt from '../Aunt/Aunt';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

const Grandpa = () => {
    return (
        <div className='grandpa'>
            <h1>Grandpa</h1>
            <div className="kids">
                <Father></Father>
                <Aunt></Aunt>
                <Uncle></Uncle>
            </div>
        </div>
    );
};

export default Grandpa;