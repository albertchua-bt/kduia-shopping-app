import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const SpentSoFar = () => {
    const { expenses, Location } = useContext(AppContext);
    // const totalExpenses = expenses.reduce((total, item) => {
    //     return (total += (item.unitprice * item.quantity));
    // }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {Location}{expenses}</span>
        </div>
    );
};

export default SpentSoFar;