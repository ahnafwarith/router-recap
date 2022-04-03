import React from 'react';
import Aunt from '../Aunt/Aunt';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

const Grandpa = () => {
    const house = 10
    return (
        <div className='grandpa'>
            <h1>Grandpa</h1>
            <div className="kids">
                <Father house={house}></Father>
                <Aunt house={house}></Aunt>
                <Uncle house={house}></Uncle>
            </div>
        </div>
    );
};

export default Grandpa;