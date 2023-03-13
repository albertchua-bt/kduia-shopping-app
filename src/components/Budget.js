import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const {dispatch, MoneyType, budget } = useContext(AppContext);

  // const changeMoneyType = (val)=>{
  //   dispatch({
  //       type: 'CHG_MONEYTYPE',
  //       payload: val,
  //   })
  // }

  const changeBudget = (val)=>{
    dispatch({
        type: 'CHG_BUDGET',
        payload: val,
    })
    console.log(val)
  }

  const onChangeEvent = (e) => { console.log('im a test!')} 

  return (
        <div className='alert alert-secondary'> Budget: {MoneyType} {
      <input 
        name="Budget" 
        id="Budget" 
        type='number'
        max='20000'
        step='10'
        defaultValue={2000}
        onChange={event=>changeBudget(event.target.value)}>
      </input>	
      }	
    </div>
    );
};

export default Budget;