import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
  const { MoneyType, budget } = useContext(AppContext);

  return (
    <div className='alert alert-success'>
        <span>Remaining: {MoneyType} {budget}</span>
    </div>
    );
};

export default Remaining;