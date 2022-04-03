import React, { createContext, useState } from 'react';
import Aunt from '../Aunt/Aunt';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const ContextGift = createContext('Chess-Set')

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const increaseHouse = () => {
        const newHouse = house + 1;
        setHouse(newHouse)
    }
    const ornament = 'diamond-ring'
    return (
        <ContextGift.Provider value={ornament}>
            <div className='grandpa'>
                <h1>Grandpa</h1>
                <p>{house}</p>
                <button onClick={increaseHouse}>Buy House</button>
                <div className="kids">
                    <Father house={house} ornament={ornament}></Father>
                    <Aunt house={house}></Aunt>
                    <Uncle house={house}></Uncle>
                </div>
            </div>
        </ContextGift.Provider>
    );
};

export default Grandpa;