import React, { useContext } from 'react';
import { ContextGift } from '../Grandpa/Grandpa';

const Special = ({ ornament }) => {
    const gift = useContext(ContextGift)
    return (
        <div>
            <h1>Special:{gift}</h1>
        </div>
    );
};

export default Special;