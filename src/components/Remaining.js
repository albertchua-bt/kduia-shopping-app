import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
  const { MoneyType } = useContext(AppContext);

  return (
    <div className='alert alert-primary'>
        <span>Remaining: {MoneyType}[insert money]</span>
    </div>
    );
};

export default Remaining;