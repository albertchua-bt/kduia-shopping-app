import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
  const { MoneyType, budget, CartValue } = useContext(AppContext);

  return (
    <div className='alert alert-success'>
        <span>Remaining: {MoneyType} {2000 - CartValue}</span>
    </div>
    );
};

export default Remaining;