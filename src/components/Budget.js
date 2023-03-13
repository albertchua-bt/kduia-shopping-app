import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const {dispatch, MoneyType } = useContext(AppContext);

  // const changeMoneyType = (val)=>{
  //   dispatch({
  //       type: 'CHG_MONEYTYPE',
  //       payload: val,
  //   })
  // }

  const onChangeEvent = (e) => { console.log('im a test!')} 

  return (
        <div className='alert alert-secondary'> Budget: {MoneyType} {
      <input 
        name="Budget" 
        id="Budget" 
        type='number'
        max='20000'
        step='10'
        onChange={event=>onChangeEvent(event.target.value)}>
      </input>	
      }	
    </div>
    );
};

export default Budget;